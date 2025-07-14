import Component from '@glimmer/component';
import { tracked } from '@glimmer/tracking';
import { action } from '@ember/object';
import Counter from 'rs-common/components/counter';

export default class DoubleItComponent extends Component {
  @tracked multiple = 1;

  @action
  updateMultiple(newMultiple) {
    this.multiple = newMultiple;
  }
  <template>
    <Counter @multiple={{this.multiple}} @updateMultiple={{this.updateMultiple}} />
  </template>
}
