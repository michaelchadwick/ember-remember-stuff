import Route from '@ember/routing/route';
import { service } from '@ember/service';
import { hash } from 'rsvp';

export default class IndexRoute extends Route {
  @service store;

  model() {
    return hash({
      checklists: this.store.findAll('checklist'),
    });
  }
}
