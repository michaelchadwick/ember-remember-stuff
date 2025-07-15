import Component from '@glimmer/component';
import { tracked } from '@glimmer/tracking';
import { action } from '@ember/object';
import { on } from '@ember/modifier';
import t from 'ember-intl/helpers/t';
import { fn } from '@ember/helper';

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
  <template>
    <div class="counter" data-test-counter>
      <h3>{{t "components.counter.head"}}</h3>

      <div class="frame">
        <div class="count">{{this.count}}</div>
        <div><label>{{t "components.counter.count"}}</label></div>
        <div class="multiple">
          <span class="x">{{t "general.x"}}</span>
          <span class="num">{{@multiple}}</span>
        </div>
        <div><label>{{t "components.counter.multi"}}</label></div>
        <div><hr /></div>
        <div><label class="blank">&nbsp;</label></div>
        <div class="total">{{this.total}}</div>
        <div><label>{{t "general.total"}}</label></div>
      </div>

      <div class="buttons">
        <button type="button" {{on "click" (fn this.change 1)}}>{{t
            "components.counter.countAdd"
          }}</button>
        <button type="button" {{on "click" (fn this.change -1)}}>{{t
            "components.counter.countSubtract"
          }}</button>

        <button type="button" {{on "click" this.double}}>{{t "components.counter.multiX2"}}</button>

        <button type="button" {{on "click" this.reset}}>{{t "general.reset"}}</button>
      </div>
    </div>
  </template>
}
