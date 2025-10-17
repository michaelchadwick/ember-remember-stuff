import Component from '@glimmer/component';
import { tracked } from '@glimmer/tracking';
import { action } from '@ember/object';
import { on } from '@ember/modifier';
import t from 'ember-intl/helpers/t';
import pick from 'tc-common/helpers/pick';
import set from 'ember-set-helper/helpers/set';
import autofocus from 'frontend/modifiers/autofocus';

export default class NewMessageInputComponent extends Component {
  @tracked message;

  @action
  createMessage(event) {
    event.preventDefault();

    if (this.message && this.args.onCreate) {
      this.args.onCreate(this.message);

      // reset the message input
      this.message = '';
    }
  }
  <template>
    <form {{on "submit" this.createMessage}} id="new-message-input">
      <label for="new-message-text">{{t "general.message"}}</label>
      {{! template-lint-disable no-autofocus-attribute }}
      <input
        type="text"
        value={{this.message}}
        id="new-message-text"
        placeholder={{t "components.newMessageInput.placeholder"}}
        {{on "input" (pick "target.value" (set this "message"))}}
        {{autofocus}}
      />
      <button type="submit">
        {{t "general.send"}}
      </button>
    </form>

    <p>{{t "components.newMessageInput.nothingSaved" htmlSafe=true}}</p>
  </template>
}
