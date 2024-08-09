import Route from '@ember/routing/route';
import { service } from '@ember/service';

export default class UserRoute extends Route {
  @service dataLoader;

  model(params) {
    return this.dataLoader.loadUserProfile(params.user_id);
  }
}
