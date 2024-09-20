import Route from '@ember/routing/route';
import { service } from '@ember/service';
import { tracked } from '@glimmer/tracking';
import ENV from 'frontend/config/environment';

export default class IndexRoute extends Route {
  @service store;
  @tracked appEnv;

  setupController(controller) {
    controller.set('appEnv', ENV.environment);
  }

  model() {
    return this.store.findAll('checklist');
  }
}
