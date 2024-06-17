import Route from '@ember/routing/route';
import { service } from '@ember/service';
import { tracked } from '@glimmer/tracking';
import ENV from 'remember-stuff/config/environment';

export default class ApplicationRoute extends Route {
  @tracked env = ENV.environment;
  @tracked ghUsername = ENV.APP.GITHUB_USERNAME;
  @service headData;
  @service store;
  @service intl;

  setupController(controller) {
    controller.set('env', ENV.environment);
  }

  beforeModel() {
    this.intl.setLocale(['en-us']);
  }

  model() {
    return this.store.findRecord('gh-user', this.ghUsername);
  }

  afterModel() {
    this.headData.title = 'RemEmberStuff';
    this.headData.ogTitle = 'RemEmberStuff Tutorial';
    this.headData.routeTitle = null;

    if (this.env === 'production') {
      this.headData.faviconType = 'prod';
      this.headData.envTitle = 'prod';
    } else {
      this.headData.faviconType = 'dev';
      this.headData.envTitle = 'dev';
    }

    // will output in browser dev console
    switch (this.env) {
      case 'development': {
        console.log(
          '%cENV: App is in development! Go nuts!',
          'background: transparent; color: #1da826',
        );
        break;
      }
      case 'test': {
        console.log(
          '%cENV: App is in test! Hope it all passes.',
          'background: transparent; color: #b58a24',
        );
        break;
      }
      case 'production': {
        console.log(
          '%cENV: App is in production! Be careful.',
          'background: transparent; color: #cb0b38',
        );
        break;
      }
      default: {
        console.log('ENV: App is in an unknown environment...');
        break;
      }
    }
  }
}
