import Route from '@ember/routing/route';
import { service } from '@ember/service';

export default class LinksRoute extends Route {
  @service store;
  @service router;

  async model(params, transition) {
    try {
      return await this.store.findAll('link');
    } catch {
      this.router.replaceWith('error', { transition, title: 'could not find any links' });
    }
  }
}
