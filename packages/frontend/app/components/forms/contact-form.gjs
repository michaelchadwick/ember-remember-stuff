import Component from '@glimmer/component';
import { tracked } from '@glimmer/tracking';
import { action } from '@ember/object';
import { service } from '@ember/service';
import t from 'ember-intl/helpers/t';
import { on } from '@ember/modifier';
import HtmlEditor from 'frontend/components/html-editor';

class Errors {
  @tracked name = null;
  @tracked email = null;
  @tracked message = null;
}

export default class ContactFormComponent extends Component {
  @tracked name = '';
  @tracked email = '';
  @tracked message = '';
  @tracked errors = new Errors();
  @service intl;

  get isNameValid() {
    return this.name.trim().length > 0;
  }

  get isEmailValid() {
    let emailPattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    return emailPattern.test(this.email.trim());
  }

  get isMessageValid() {
    return this.message.trim().length > 0;
  }

  get isFormValid() {
    return this.isNameValid && this.isEmailValid && this.isMessageValid;
  }

  @action
  validateField(fieldName) {
    switch (fieldName) {
      case 'name':
        this.errors.name = this.isNameValid
          ? null
          : this.intl.t('errors.required', { description: 'Name' });
        break;
      case 'email':
        this.errors.email = this.isEmailValid
          ? null
          : this.intl.t('errors.invalid', { description: 'Email' });
        break;
      case 'message':
        this.errors.message = this.isMessageValid
          ? null
          : this.intl.t('errors.required', { description: 'Message' });
        break;
    }
  }

  @action
  handleInput(event) {
    let { name, value } = event.target;
    this[name] = value;

    this.validateField(name);
  }

  @action
  handleSubmit(event) {
    event.preventDefault();

    this.validateField('name');
    this.validateField('email');
    this.validateField('message');

    if (this.isFormValid) {
      this.sendMessage();
    } else {
      console.error('Form has validation errors', this.errors);
    }
  }

  @action
  changeMessage(contents) {
    this.message = contents;
  }

  @action
  sendMessage() {
    window.alert(
      `${this.name} (${this.email}) said:\n${this.message}\n\nTODO: actually send this somewhere :D`,
    );

    // Clear the form
    this.name = '';
    this.email = '';
    this.message = '';
    this.errors = new Errors();
  }

  <template>
    <div class="contact-form" data-test-contact-form ...attributes>
      <p>{{t "sections.contact.description"}}</p>

      <form {{on "submit" this.handleSubmit}} data-test-form>
        <div class="item" data-test-name>
          <label for="name" aria-label={{t "general.name"}}></label>
          <input
            autocapitalize="off"
            autocorrect="off"
            class="light{{if this.errors.name ' error'}}"
            id="name"
            name="name"
            placeholder={{t "general.name"}}
            value={{this.name}}
            {{on "input" this.handleInput}}
          />
          {{#if this.errors.name}}
            <div class="validation-error">{{this.errors.name}}</div>
          {{/if}}
        </div>
        <div class="item" data-test-email>
          <label for="email" aria-label={{t "general.email"}}></label>
          <input
            autocapitalize="off"
            autocorrect="off"
            class="light{{if this.errors.email ' error'}}"
            id="email"
            name="email"
            placeholder={{t "general.email"}}
            value={{this.email}}
            {{on "input" this.handleInput}}
          />
          {{#if this.errors.email}}
            <div class="validation-error">{{this.errors.email}}</div>
          {{/if}}
        </div>
        <div class="item editor" data-test-message>
          <label for="message" aria-label={{t "general.message"}}></label>

          <HtmlEditor
            @content={{this.message}}
            @update={{this.changeMessage}}
            @autofocus={{true}}
          />
        </div>

        <button type="submit" data-test-submit>
          {{t "general.sendMessage"}}
        </button>
      </form>
    </div>
  </template>
}
