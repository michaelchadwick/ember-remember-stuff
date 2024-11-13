import Route from '@ember/routing/route';
import { service } from '@ember/service';
import { tracked } from '@glimmer/tracking';
import ENV from 'frontend/config/environment';

export default class MusicRoute extends Route {
  @service headData;
  @service store;
  @tracked isLoading = true;
  @tracked env = ENV.environment;

  beforeModel() {
    this.headData.routeTitle = 'Music';
  }

  model() {
    if (ENV.environment == 'test') {
      return null;
    } else {
      if (this.store.peekAll('song').length) {
        return this.store.peekAll('song');
      } else if (this.store.findAll('song')) {
        return this.store.findAll('song');
      } else {
        return null;
      }
    }
  }
}
