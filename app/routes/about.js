import Route from '@ember/routing/route';
import { service } from '@ember/service';
import { tracked } from '@glimmer/tracking';

export default class AboutRoute extends Route {
  @service store;
  @service headData;
  @tracked isLoading = true;

  model() {
    // return this.store.findAll('gh-commit');
  }

  afterModel() {
    this.headData.routeTitle = 'About';
  }
}
