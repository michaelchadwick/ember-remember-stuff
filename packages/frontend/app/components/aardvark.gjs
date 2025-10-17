import Component from '@glimmer/component';

export default class extends Component {
  ants = 10;

  get antCount() {
    return this.ants;
  }
  <template>
    <span class="ant-count">{{this.antCount}}</span>
  </template>
}
