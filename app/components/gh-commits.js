import Component from '@glimmer/component';
import { service } from '@ember/service';

export default class GhCommitsComponent extends Component {
  @service store;

  model() {
    return this.store.findAll('link');
  }
}
