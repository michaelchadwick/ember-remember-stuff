import Route from '@ember/routing/route';
import { service } from '@ember/service';
import { hash } from 'rsvp';
import { tracked } from '@glimmer/tracking';
import ENV from 'frontend/config/environment';

export default class IndexRoute extends Route {
  @service store;
  @tracked ghUsername = ENV.APP.GITHUB_USERNAME;

  async model() {
    return hash({
      ghUser: this.store.findRecord('gh-user', this.ghUsername),
      checklists: this.store.findAll('checklist'),
    });
  }
}
