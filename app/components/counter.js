import Component from '@glimmer/component';
import { tracked } from '@glimmer/tracking';
import { action } from '@ember/object';

export default class CounterComponent extends Component {
  @tracked count = 0;

  get total() {
    return this.count * this.args.multiple;
  }

  @action
  change(amount) {
    this.count += amount;
  }

  @action
  double() {
    this.args.updateMultiple(this.args.multiple * 2);
  }

  @action
  reset() {
    this.count = 0;
    this.args.updateMultiple(1);
  }
}
