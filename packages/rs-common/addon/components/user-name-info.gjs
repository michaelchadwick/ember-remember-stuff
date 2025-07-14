import Component from '@glimmer/component';
import { service } from '@ember/service';
import { action } from '@ember/object';
import { on } from '@ember/modifier';
import { LinkTo } from '@ember/routing';
import FaIcon from 'rs-common/components/fa-icon';

export default class UserNameInfoComponent extends Component {
  @service intl;

  get kloutLevel() {
    return this.args.kloutLevel;
  }

  get rowLevel() {
    return this.args.rowLevel;
  }

  get showLevels() {
    return this.args.showLevels ?? false;
  }

  @action
  buffKloutAndRowLevel(event) {
    event.stopPropagation();

    this.args.onBuffKlout(Math.floor(Math.random() * 100));
    this.args.onBuffRow();
  }
  <template>
    <div class="user-name-info">
      {{#if @linkToUser}}
        <LinkTo @route="user" @model={{@user}} data-test-user-link>
          <span class="user-name-info" data-test-user-name-info ...attributes>
            <span data-test-display-name>
              {{#if @firstLastName}}
                {{@user.fullNameFromFirstLastName}}
              {{else}}
                {{@user.fullNameFromDisplayName}}
              {{/if}}
            </span>
          </span>
        </LinkTo>
      {{else}}
        <span class="user-name-info" data-test-user-name-info ...attributes>
          <span data-test-display-name>
            {{#if @firstLastName}}
              {{@user.fullNameFromFirstLastName}}
            {{else}}
              {{@user.fullNameFromDisplayName}}
            {{/if}}
          </span>
        </span>
      {{/if}}
      {{#if @showLevels}}
        <span>
          <FaIcon @icon="heart" {{on "click" this.buffKloutAndRowLevel}} />
        </span>
        <span>({{this.kloutLevel}}, {{this.rowLevel}})</span>
      {{/if}}
    </div>
  </template>
}
