import Component from '@glimmer/component';
import { service } from '@ember/service';
import { tracked } from '@glimmer/tracking';
import { action } from '@ember/object';

export default class UserListComponent extends Component {
  @service intl;
  @tracked selectedUsers = [];

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
  selectUser(user) {
    if (this.selectedUsers.map((u) => u.displayName).includes(user.displayName)) {
      this.selectedUsers = this.selectedUsers.filter((u) => u.displayName != user.displayName);
    } else {
      this.selectedUsers = [...this.selectedUsers, user];
    }
  }
}