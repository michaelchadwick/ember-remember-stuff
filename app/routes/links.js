import Route from '@ember/routing/route';
import { service } from '@ember/service';

export default class LinksRoute extends Route {
  @service store;
  @service headData;

  beforeModel() {
    this.headData.routeTitle = 'Links';
  }

  model() {
    return this.store.findAll('link');
  }
}
