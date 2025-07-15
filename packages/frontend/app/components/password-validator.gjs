import Component from '@glimmer/component';
import { cached, tracked } from '@glimmer/tracking';
import { action } from '@ember/object';
import { service } from '@ember/service';
import { isEmpty } from '@ember/utils';
import { dropTask, timeout } from 'ember-concurrency';
import { validatable, Length, NotBlank } from 'rs-common/decorators/validation';
import { TrackedAsyncData } from 'ember-async-data';
import { on } from '@ember/modifier';
import t from 'ember-intl/helpers/t';
import eq from 'ember-truth-helpers/helpers/eq';
import { concat, fn, uniqueId } from '@ember/helper';
import { gt } from 'ember-truth-helpers';
import pick from 'rs-common/helpers/pick';
import queue from 'rs-common/helpers/queue';
import perform from 'ember-concurrency/helpers/perform';
import LoadingSpinner from 'frontend/components/loading-spinner';
import ValidationError from 'frontend/components/validation-error';

@validatable
export default class PasswordValidatorComponent extends Component {
  @service intl;

  @tracked @Length(5) @NotBlank() password = null;
  @tracked isSaving = false;
  @tracked passwordStrengthScore = 0;

  @action
  async setPassword(password) {
    this.password = password;
    await this.calculatePasswordStrengthScore();
  }

  async calculatePasswordStrengthScore() {
    const { default: zxcvbn } = await import('zxcvbn');
    const password = isEmpty(this.password) ? '' : this.password;
    const obj = zxcvbn(password);
    this.passwordStrengthScore = obj.score;
  }

  @cached
  get hasErrorForPasswordData() {
    return new TrackedAsyncData(this.hasErrorFor('password'));
  }

  get hasErrorForPassword() {
    return this.hasErrorForPasswordData.isResolved ? this.hasErrorForPasswordData.value : false;
  }

  save = dropTask(async () => {
    this.addErrorDisplaysFor(['password']);
    const isValid = await this.isValid();
    if (!isValid) {
      return false;
    }
    await timeout(250); // artificial "validation processing"
    this.clearErrorDisplay();
  });

  saveOrCancel = dropTask(async (event) => {
    const keyCode = event.keyCode;
    const enterKey = 13;

    if (enterKey === keyCode) {
      await this.save.perform();
    }
  });
  <template>
    <h3>{{t "components.passwordValidator.head"}}</h3>
    {{#let (uniqueId) as |templateId|}}
      <div class="password-validator" data-test-password-validator>
        <label for="password-{{templateId}}">
          {{t "general.password"}}:
        </label>
        <input
          id="password-{{templateId}}"
          type="text"
          value={{this.password}}
          {{on "input" (pick "target.value" this.setPassword)}}
          {{on "keyup" (queue (fn this.addErrorDisplayFor "password") (perform this.saveOrCancel))}}
          data-test-password-input
        />
        {{#if this.hasErrorForPassword}}
          <ValidationError @validatable={{this}} @property="password" />
        {{else if (gt this.password.length 0)}}
          <span
            class="password-strength {{concat 'strength-' this.passwordStrengthScore}}"
            data-test-password-strength-text
          >
            {{#if (eq this.passwordStrengthScore 0)}}
              {{t "general.tryHarder"}}
            {{else if (eq this.passwordStrengthScore 1)}}
              {{t "general.bad"}}
            {{else if (eq this.passwordStrengthScore 2)}}
              {{t "general.weak"}}
            {{else if (eq this.passwordStrengthScore 3)}}
              {{t "general.good"}}
            {{else if (eq this.passwordStrengthScore 4)}}
              {{t "general.strong"}}
            {{/if}}
          </span>
          <meter
            max="4"
            value={{this.passwordStrengthScore}}
            data-test-password-strength-meter
          ></meter>
        {{/if}}
        <div class="buttons">
          <button
            type="button"
            class="done text"
            disabled={{this.save.isRunning}}
            {{on "click" (perform this.save)}}
            data-test-submit
          >
            {{#if this.save.isRunning}}
              <LoadingSpinner />
            {{else}}
              {{t "components.passwordValidator.validate"}}
            {{/if}}
          </button>
        </div>
      </div>
    {{/let}}
  </template>
}
