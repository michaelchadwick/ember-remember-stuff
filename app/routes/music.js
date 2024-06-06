import Route from '@ember/routing/route';
import { service } from '@ember/service';
import { tracked } from '@glimmer/tracking';

export default class MusicRoute extends Route {
  @service store;
  @service headData;
  @tracked isLoading = true;

  beforeModel() {
    this.headData.routeTitle = 'Music';
  }

  model() {
    return this.store.findAll('song');
  }
}
