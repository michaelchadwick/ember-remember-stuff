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

    console.info(`tomster says...${this.isVisible ? 'hello' : 'goodbye'}`);
  }
  <template>
    <div
      id="tomster-popper"
      class={{if this.isVisible "show" "hide"}}
      {{onKey "ctrl+shift+KeyT" this.popToggle}}
    >
      <div id="greeting">
        {{t "general.greeting" name="Tomster"}}
      </div>
      <img src="/assets/images/teaching-tomster.png" alt={{t "general.teachingTomster"}} />
    </div>
  </template>
}
