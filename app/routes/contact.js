import Route from '@ember/routing/route';
import { service } from '@ember/service';

export default class ContactRoute extends Route {
  @service headData;

  afterModel() {
    this.headData.routeTitle = 'Contact';
  }
}
