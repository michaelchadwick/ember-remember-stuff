import Component from '@glimmer/component';
import { tracked } from '@glimmer/tracking';
import { action } from '@ember/object';

export default class MoverComponent extends Component {
  @tracked isEnabled = false;

  @action
  toggleMovement() {
    this.isEnabled = !this.isEnabled;
  }
}
