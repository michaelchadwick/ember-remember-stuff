import Component from '@glimmer/component';
import { tracked } from '@glimmer/tracking';
import { action } from '@ember/object';
import { on } from '@ember/modifier';
import t from 'ember-intl/helpers/t';
import moveRandomlySwitch from 'frontend/modifiers/move-randomly-switch';
import FaIcon from 'frontend/components/fa-icon';

export default class MoverComponent extends Component {
  @tracked isEnabled = false;

  @action
  toggleMovement() {
    this.isEnabled = !this.isEnabled;
  }
  <template>
    {{#if this.isEnabled}}
      <div id="mover" class="moving" {{moveRandomlySwitch}}>
        <h3>
          {{t "components.mover.head"}}
          <button
            type="button"
            class="header"
            aria-label={{t "general.toggleOn"}}
            {{on "click" this.toggleMovement}}
          >
            <FaIcon @icon="toggle-on" />
          </button>
        </h3>
        {{t "components.mover.clickMeOff"}}
        <p>{{yield}}</p>
      </div>
    {{else}}
      <div id="mover">
        <h3>
          {{t "components.mover.head"}}
          <button
            type="button"
            class="header"
            aria-label={{t "general.toggleOff"}}
            {{on "click" this.toggleMovement}}
          >
            <FaIcon @icon="toggle-off" />
          </button>
        </h3>
        {{t "components.mover.clickMeOn"}}
        <p>{{yield}}</p>
      </div>
    {{/if}}
  </template>
}
