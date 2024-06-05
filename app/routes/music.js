import Route from '@ember/routing/route';
import { service } from '@ember/service';
import { tracked } from '@glimmer/tracking';

export default class MusicRoute extends Route {
  @service store;
  @service headData;
  @tracked isLoading = true;

  model() {
    return this.store.findAll('song');
  }

  afterModel() {
    this.headData.routeTitle = 'Songs';
  }
}
