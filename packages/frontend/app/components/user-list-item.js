import Component from '@glimmer/component';
import { tracked } from '@glimmer/tracking';
import { action } from '@ember/object';

export default class UserListItemComponent extends Component {
  @tracked rowLevel = 0;

  get isSelected() {
    return this.args.selected;
  }

  @action
  buffRow(amount) {
    this.rowLevel += amount;
  }

  @action
  toggleSelected() {
    this.args.onSelectUser(this.args.user);
  }
}
