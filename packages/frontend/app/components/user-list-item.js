import Component from '@glimmer/component';
import { action } from '@ember/object';

export default class UserListItemComponent extends Component {
  get kloutLevel() {
    return this.args.kloutLevel ?? 0;
  }

  get rowLevel() {
    return this.args.rowLevel ?? 0;
  }

  get isSelected() {
    return this.args.selected;
  }

  get linkToUser() {
    return this.args.linkToUser ?? false;
  }

  get showLevels() {
    return this.args.showLevels ?? false;
  }

  @action
  buffRow(amount = 1) {
    this.rowLevel += amount;
  }

  @action
  toggleSelected() {
    this.args.onSelectUser(this.args.user);
  }
}
