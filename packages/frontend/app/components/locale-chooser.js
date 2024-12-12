import Component from '@glimmer/component';
import { tracked } from '@glimmer/tracking';
import { action } from '@ember/object';
import { service } from '@ember/service';
import { guidFor } from '@ember/object/internals';
import { findById, uniqueValues } from 'rs-common/utils/array-helpers';
import { task, timeout } from 'ember-concurrency';

export default class LocaleChooserComponent extends Component {
  @service intl;
  @tracked isOpen = false;

  get locale() {
    const locale = this.intl.get('primaryLocale');
    return findById(this.locales, locale);
  }

  get locales() {
    return uniqueValues(this.intl.get('locales')).map((locale) => {
      return { id: locale, text: this.intl.t('general.language.' + locale) };
    });
  }

  get uniqueId() {
    return guidFor(this);
  }

  @action
  changeLocale(id, event) {
    this.isOpen = false;
    this.intl.setLocale(id);
    window.document.querySelector('html').setAttribute('lang', id);
    event.target.parentElement.parentElement.firstElementChild.focus();
  }

  focusFirstLink = task(async () => {
    document.body.classList.add('no-scroll');
    await timeout(1);
    document.querySelector('.locale-chooser .menu button:first-of-type').focus();
  });

  handleArrowUp(item) {
    if (item?.previousElementSibling) {
      item.previousElementSibling.focus();
    } else {
      item?.parentElement.lastElementChild.focus();
    }
  }

  async handleArrowDown(item) {
    if (item.classList.value == 'toggle') {
      this.isOpen = true;
      await this.focusFirstLink.perform();
    } else {
      if (item.nextElementSibling) {
        item.nextElementSibling.focus();
      } else {
        await this.focusFirstLink.perform();
      }
    }
  }

  @action
  keyUp(event) {
    const { key, target } = event;
    event.preventDefault();
    switch (key) {
      case 'ArrowDown':
        this.handleArrowDown(target);
        break;
      case 'ArrowUp':
        this.handleArrowUp(target);
        break;
      case 'Escape':
      case 'Tab':
      case 'ArrowRight':
      case 'ArrowLeft':
        this.close();
        break;
    }
  }
  @action
  async toggleMenu() {
    this.isOpen = !this.isOpen;

    if (this.isOpen) {
      await this.focusFirstLink.perform();
    } else {
      document.body.classList.remove('no-scroll');
    }
  }
  @action
  clearFocus(event) {
    const buttons = event.target.parentElement.children;
    for (let i = 0; i < buttons.length; i++) {
      buttons[i].blur();
    }
  }
  @action
  close() {
    this.isOpen = false;
    document.body.classList.remove('no-scroll');
  }
}
