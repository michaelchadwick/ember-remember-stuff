import EmberRouter from '@ember/routing/router';
import config from 'remember-stuff/config/environment';
import ENV from 'remember-stuff/config/environment';

export default class Router extends EmberRouter {
  location = config.locationType;
  rootURL = config.rootURL;
}

Router.map(function () {
  if (ENV.environment != 'production') {
    this.route('tests', { path: '/tests?nocontainer' });
  }

  this.route('messages');
  this.route('music');
  this.route('about');
  this.route('links');
  this.route('contact');
});
