import Component from '@glimmer/component';
import { service } from '@ember/service';
import { tracked } from '@glimmer/tracking';
import { action } from '@ember/object';

export default class UserListComponent extends Component {
  @service intl;
  @tracked selectedUsers = [];

  constructor() {
    super(...arguments);
    // console.log('this.selectedUsers', this.selectedUsers, this.selectedUsers.length);
  }

  get selectedUsersNamesDisplay() {
    return this.hasSelectedUsers
      ? this.selectedUsersNames.join(', ')
      : this.intl.t('general.noSelectedUsers');
  }

  get selectedUsersNames() {
    return this.selectedUsers.map((u) => u.displayName);
  }

  get hasSelectedUsers() {
    const count = this.selectedUsers.length;
    // console.log('count', count);
    return count > 0;
  }

  @action
  deselectAllUsers() {
    this.selectedUsers = [];
  }

  @action
  selectUser(user) {
    // console.log('UserList::selectUser(user)', user);

    if (!this.selectedUsers.map((u) => u.displayName).includes(user.displayName)) {
      this.selectedUsers.push(user);
    } else {
      this.selectedUsers = this.selectedUsers.filter((u) => u.displayName != user.displayName);
    }
  }
}
