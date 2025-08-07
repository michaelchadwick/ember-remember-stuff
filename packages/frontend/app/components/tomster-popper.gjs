import Component from '@glimmer/component';
import { tracked } from '@glimmer/tracking';
import { action } from '@ember/object';
import t from 'ember-intl/helpers/t';
import onKey from 'ember-keyboard/modifiers/on-key';

export default class TomsterPopperComponent extends Component {
  @tracked isVisible = false;

  @action
  popToggle() {
    this.isVisible = !this.isVisible;

    const tomster = document.querySelector('#tomster-popper');

    if (this.isVisible) {
      tomster.style.display = 'flex';
      tomster.classList = 'show';
    } else {
      tomster.classList = 'hide';
      // hack to hide tomster so tests register it as "gone"
      setTimeout(() => {
        tomster.style.display = 'none';
      }, 500);
    }

    console.info(`tomster says...${this.isVisible ? 'hello' : 'goodbye'}`);
  }
  <template>
    <aside id="tomster-popper" {{onKey "ctrl+shift+KeyT" this.popToggle}}>
      <div id="greeting">
        {{t "general.greeting" name="Tomster"}}
      </div>
      <img src="/assets/images/teaching-tomster.png" alt={{t "general.teachingTomster"}} />
    </aside>
  </template>
}
