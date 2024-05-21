import Route from '@ember/routing/route';
import { service } from '@ember/service';
import { tracked } from '@glimmer/tracking';
import ENV from 'ember-fake-chat/config/environment';

export default class ApplicationRoute extends Route {
  @service headData;
  @service store;
  @tracked env = ENV.environment;
  @tracked ghUsername = 'michaelchadwick';
  @tracked ghUserObject;

  setupController(controller) {
    controller.set('env', ENV.environment);
    controller.set('ghUsername', this.ghUsername);
  }

  model() {
    return this.store.findRecord('gh-user', this.ghUsername);
  }

  afterModel() {
    this.headData.title = 'FakeChat';
    this.headData.ogTitle = 'FakeChat Ember Tutorial';
    this.headData.routeTitle = null;

    if (this.env === 'production') {
      this.headData.faviconType = 'prod';
      this.headData.envTitle = 'prod';
    } else {
      this.headData.faviconType = 'dev';
      this.headData.envTitle = 'dev';
    }

    switch (this.env) {
      case 'development': {
        console.log('ENV: Oh, boy! This tutorial is running in development! Go nuts!');
        break;
      }
      case 'test': {
        console.log('ENV: Oh, boy! This tutorial is running in test! Hope everything passes.');
        break;
      }
      case 'production': {
        console.log('ENV: Oh, boy! This tutorial is running in production! Be careful.');
        break;
      }
      default: {
        console.log("ENV: Hmm. I don't know what environment this tutorial is running in...");
        break;
      }
    }
  }
}
