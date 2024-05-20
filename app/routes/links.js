import Route from '@ember/routing/route';
import { service } from '@ember/service';

export default class LinksRoute extends Route {
  @service store;
  @service headData;

  model() {
    return this.store.findAll('link');
  }

  afterModel() {
    this.headData.routeTitle = 'Links';
  }
}
