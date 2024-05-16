import EmberRouter from '@ember/routing/router';
import config from 'ember-fake-chat/config/environment';
import ENV from 'ember-fake-chat/config/environment';

export default class Router extends EmberRouter {
  location = config.locationType;
  rootURL = config.rootURL;
}

Router.map(function () {
  this.route('about');

  if (ENV.environment != 'production') {
    this.route('tests', { path: '/tests?nocontainer' });
  }
});
