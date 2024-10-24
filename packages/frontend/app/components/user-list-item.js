import Component from '@glimmer/component';
import { tracked } from '@glimmer/tracking';
import { action } from '@ember/object';

export default class UserListItemComponent extends Component {
  @tracked selected = false;

  @action
  handleClick() {
    // console.log('UserListItem::handleClick()', this.args.user.displayName);

    this.args.onSelectUser(this.args.user);
    this.selected = !this.selected;
  }
}
