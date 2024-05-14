import Route from '@ember/routing/route';
import { inject as service } from '@ember/service';
import ENV from 'ember-components/config/environment';

export default class ApplicationRoute extends Route {
  @service headData;

  afterModel() {
    this.headData.title = 'Tutorial: Ember Components';
    this.headData.ogTitle = 'Tutorial: Ember Components';

    const env = ENV.environment;

    if (env === 'production') {
      this.headData.faviconType = 'prod';
      this.headData.envTitle = 'prod';
    } else {
      this.headData.faviconType = 'dev';
      this.headData.envTitle = 'dev';
    }

    switch (env) {
      case 'development': {
        console.log('ENV: Oh, boy! This tutorial is running in development! Go nuts!');
        break;
      }
      case 'test': {
        console.log('ENV: Oh, boy! This tutorial is running in test! Hope everything passes.');
        break;
      }
      case 'production': {
        console.log(
          "ENV: Oh, boy! This tutorial is running in production! Don't do anything critical here.",
        );
        break;
      }
      default: {
        console.log("ENV: Hmm. I don't know what environment this tutorial is running in...");
        break;
      }
    }
  }
}
