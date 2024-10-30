import Component from '@glimmer/component';
import { action } from '@ember/object';

export default class UserListItemComponent extends Component {
  get isSelected() {
    return this.args.selected;
  }

  @action
  handleClick() {
    this.args.onSelectUser(this.args.user);
  }
}
