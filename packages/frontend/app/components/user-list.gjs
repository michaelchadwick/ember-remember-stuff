import Component from '@glimmer/component';
import { service } from '@ember/service';
import { tracked } from '@glimmer/tracking';
import { action } from '@ember/object';
import eq from 'ember-truth-helpers/helpers/eq';
import { on } from '@ember/modifier';
import t from 'ember-intl/helpers/t';
import FaIcon from 'rs-common/components/fa-icon';
import UserListItem from 'frontend/components/user-list-item';

export default class UserListComponent extends Component {
  @service intl;
  @tracked selectedUsers = [];
  @tracked kloutLevel = 0;

  get selectedUsersNamesDisplay() {
    return this.hasSelectedUsers
      ? this.selectedUsersNames.join(', ')
      : this.intl.t('general.noSelectedUsers');
  }

  get selectedUsersNames() {
    return this.selectedUsers.map((u) => u.displayName);
  }

  get hasSelectedUsers() {
    return this.selectedUsers.length > 0;
  }

  get isSelected() {
    return (user) => this.selectedUsers.includes(user);
  }

  @action
  deselectAllUsers() {
    this.selectedUsers = [];
  }

  @action
  buffKlout(amount) {
    this.kloutLevel += amount;
  }

  @action
  selectUser(user) {
    if (this.selectedUsers.map((u) => u.displayName).includes(user.displayName)) {
      this.selectedUsers = this.selectedUsers.filter((u) => u.displayName != user.displayName);
    } else {
      this.selectedUsers = [...this.selectedUsers, user];
    }
  }
  <template>
    <div class="user-list" data-test-user-list ...attributes>
      <div class="user-list-selected-users">
        <button
          type="button"
          class={{if (eq this.selectedUsers.length 0) "disabled"}}
          {{on "click" this.deselectAllUsers}}
        >
          <FaIcon @icon="square-xmark" />
        </button>
        ({{this.selectedUsers.length}})
        {{this.selectedUsersNamesDisplay}}
      </div>

      <table>
        <thead>
          <tr>
            <th class="user-checked-header" colspan="1">
              <FaIcon @icon="check" />
            </th>
            <th class="user-id-header" colspan="1">
              {{t "general.id"}}
            </th>
            <th class="user-fullname-header" colspan="1">
              {{t "general.fullName"}}
            </th>
            <th class="user-email-header" colspan="1">
              {{t "general.email"}}
            </th>
            <th class="user-root-header" colspan="1">
              <FaIcon @icon="shield" />
            </th>
          </tr>
        </thead>
        <tbody>
          {{#each @users as |user|}}
            <UserListItem
              @user={{user}}
              @selected={{this.isSelected user}}
              @onSelectUser={{this.selectUser}}
              @kloutLevel={{this.kloutLevel}}
              @onBuffKlout={{this.buffKlout}}
              @linkToUser={{true}}
            />
          {{/each}}
        </tbody>
      </table>
    </div>
  </template>
}
