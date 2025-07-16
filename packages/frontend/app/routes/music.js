import Route from '@ember/routing/route';
import { service } from '@ember/service';
import ENV from 'frontend/config/environment';

export default class MusicRoute extends Route {
  @service store;

  model() {
    if (ENV.environment == 'test') {
      return null;
    }

    return this.store.query('song', {});
  }
}
