import ESASessionService from 'ember-simple-auth/services/session';
// import config from 'frontend/config/environment';
// import * as Sentry from '@sentry/ember';
import { service } from '@ember/service';

export default class SessionService extends ESASessionService {
  @service fetch;
  @service currentUser;

  async handleAuthentication() {
    console.info('SessionService handleAuthentication');

    super.handleAuthentication(...arguments);

    // if ('serviceWorker' in navigator) {
    //   const reg = await navigator.serviceWorker.getRegistration();
    //   if (reg && reg.waiting) {
    //     reg.waiting.postMessage('skipWaiting');
    //   }
    // }
    // const user = await this.currentUser.getModel();
    // Sentry.setUser({ id: user.id });
    // Sentry.metrics.increment('login', 1, {
    //   tags: { userAgent: navigator.userAgent },
    // });
  }

  async handleInvalidation() {
    console.info('SessionService handleInvalidation');

    // Sentry.getCurrentScope().clear();

    // if (config.environment !== 'test') {
    //   const logoutUrl = '/auth/logout';
    //   return this.fetch.getJsonFromApiHost(logoutUrl).then((response) => {
    //     if (response.status === 'redirect') {
    //       window.location.replace(response.logoutUrl);
    //     } else {
    //       window.location.replace(config.rootURL);
    //     }
    //   });
    // }
  }
}
