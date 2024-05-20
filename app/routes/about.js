import Route from '@ember/routing/route';
import { service } from '@ember/service';

export default class AboutRoute extends Route {
  @service headData;

  afterModel() {
    this.headData.routeTitle = 'About';
  }
}
