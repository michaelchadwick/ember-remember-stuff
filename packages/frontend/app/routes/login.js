import Route from '@ember/routing/route';
import { service } from '@ember/service';

export default class LoginRoute extends Route {
  @service router;
  @service session;

  beforeModel() {
    // this.session.prohibitAuthentication('index');
    // uncomment next line to actually try authentication
    // currently, it breaks the page
    // return this.attemptAuth();
  }

  async attemptAuth() {
    return await this.login();
  }

  async login() {
    // const currentUrl = [
    //   window.location.protocol,
    //   '//',
    //   window.location.host,
    //   window.location.pathname,
    // ].join('');
    // let loginUrl = `/auth/login?service=${currentUrl}`;

    // const queryParams = {};
    // if (window.location.search.length > 1) {
    //   window.location.search
    //     .substring(1)
    //     .split('&')
    //     .forEach((str) => {
    //       const arr = str.split('=');
    //       queryParams[arr[0]] = arr[1];
    //     });
    // }

    // const response = await this.fetch.getJsonFromApiHost(loginUrl);
    // if (response.status === 'redirect') {
    //   const casLoginUrl = await this.rs.itemFromConfig('casLoginUrl');
    //   await new Promise(() => {
    //     //this promise never resolves so we don't render anything before the redirect
    //     window.location.replace(`${casLoginUrl}?service=${currentUrl}`);
    //   });
    // }
    // if (response.status === 'noAccountExists') {
    //   this.noAccountExistsError = true;
    //   this.noAccountExistsAccount = response.userId;
    //   return;
    // }
    // if (response.status === 'success') {
    //   const authenticator = 'authenticator:rs-jwt';
    //   this.session.authenticate(authenticator, { jwt: response.jwt });
    // }

    const authenticator = 'authenticator:rs-jwt';
    const response = {
      jwt: null,
    };
    this.session.authenticate(authenticator, { jwt: response.jwt });
  }
}
