import Component from '@glimmer/component';
import { tracked } from '@glimmer/tracking';
import { htmlSafe } from '@ember/template';

export default class BoxComponent extends Component {
  @tracked text;
  @tracked height = 200;
  @tracked width = 200;

  constructor() {
    super(...arguments);

    if (this.args.text) {
      this.text = new htmlSafe(this.args.text);
    }

    console.log('BoxComponent loaded');
  }
}
