import Component from '@glimmer/component';
import { tracked } from '@glimmer/tracking';
import { action } from '@ember/object';

export default class UserListComponent extends Component {
  @tracked selectedUser;

  @action
  selectUser(user) {
    this.selectedUser = this.selectedUser !== user ? user : undefined;
  }
}
