import Component from '@glimmer/component';
import { tracked } from '@glimmer/tracking';

export default class RibbonComponent extends Component {
  @tracked title = this.name;

  get name() {
    switch (this.args.content) {
      case 'development':
        return 'dev';
      case 'production':
        return 'prod';
      default:
        return '[n/a]';
    }
  }
}
