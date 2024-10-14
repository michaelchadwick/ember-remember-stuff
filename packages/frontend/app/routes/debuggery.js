import Route from '@ember/routing/route';
import { tracked } from '@glimmer/tracking';
import { service } from '@ember/service';
import { hash } from 'rsvp';
import ENV from 'frontend/config/environment';

export default class DebuggeryRoute extends Route {
  @service headData;
  @service store;

  @tracked ghUsername = ENV.APP.GITHUB_USERNAME;

  beforeModel() {
    this.headData.routeTitle = 'Debuggery';
  }

  model() {
    return hash({
      ghUser: this.store.findRecord('gh-user', this.ghUsername),
    });
  }

  async afterModel() {
    await import('zxcvbn');
  }
}
