import Route from '@ember/routing/route';
import { service } from '@ember/service';

export default class LinkRoute extends Route {
  @service store;

  async model(params) {
    return this.store.findRecord('link', params.link_id);
  }
}
