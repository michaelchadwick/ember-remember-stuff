import Route from '@ember/routing/route';
import { service } from '@ember/service';

export default class UsersRoute extends Route {
  @service session;
  @service store;

  async beforeModel(transition) {
    console.info('UsersRoute beforeModel transition:', transition.to.name);
    // this.session.requireAuthentication(transition, 'login');
  }

  model() {
    return this.store.query('user', { sort: 'id' });
  }
}
