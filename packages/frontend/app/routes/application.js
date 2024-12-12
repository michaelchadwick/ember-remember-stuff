import Route from '@ember/routing/route';
import { service } from '@ember/service';
import { tracked } from '@glimmer/tracking';
import ENV from 'frontend/config/environment';

export default class AuthenticatedRoute extends Route {
  @service currentUser;
  @service headData;
  @service intl;
  @service router;
  @service session;

  @tracked appEnv = ENV.environment;

  setupController(controller) {
    controller.set('appEnv', ENV.environment);
  }

  beforeModel() {
    this.intl.setLocale(['en-us']);
    const locale = this.intl.primaryLocale;
    window.document.querySelector('html').setAttribute('lang', locale);
  }

  afterModel() {
    this.headData.title = 'RemEmberStuff';
    this.headData.ogTitle = 'RemEmberStuff Tutorial';
    this.headData.routeTitle = null;

    if (this.appEnv === 'production') {
      this.headData.faviconType = 'prod';
      this.headData.envTitle = 'prod';
    } else {
      this.headData.faviconType = 'dev';
      this.headData.envTitle = 'dev';
    }

    // will output in browser dev console
    switch (this.appEnv) {
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

    window.addEventListener('click', () => console.log(document.activeElement));
    window.addEventListener('keyup', () => console.log(document.activeElement));
  }

  async activate() {
    if (this.currentUser.currentUserId) {
      console.log('activate(currentUserId)', this.currentUser.currentUserId);
    }
  }
}
