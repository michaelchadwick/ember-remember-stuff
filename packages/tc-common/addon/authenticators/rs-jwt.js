import { service } from '@ember/service';
import Base from 'ember-simple-auth/authenticators/base';
// import jwtDecode from 'tc-common/utils/jwt-decode';
// import { cancel, later } from '@ember/runloop';
// import { DateTime } from 'luxon';

export default class RsJWT extends Base {
  @service rsConfig;
  @service intl;
  // #tokenExpirationTimeout = null;

  async authenticate(credentials) {
    if (credentials.username === 'tomster' && credentials.password === 't0m5t3r') {
      // faked username and id for now
      const username = credentials.username;
      const user_id = 5;
      return { username, user_id };
    } else {
      const fakeAuthObj = {
        json: { status: 'error', errors: ['badCredentials'], jwt: null },
        status: 401,
        statusText: this.intl.t('general.unauthorized'),
        text: '{"status":"error","errors":["badCredentials"],"jwt":null}',
      };
      throw fakeAuthObj;
    }
  }

  // async authenticate(credentials, headers) {
  //   let jwt;
  //   if ('jwt' in credentials) {
  //     jwt = credentials.jwt;
  //   } else {
  //     jwt = (await this.loginWithCredentials(credentials, headers)).jwt;
  //   }

  //   return this.#extractTokenAndSetupExpiration(jwt);
  // }

  async invalidate() {
    return;

    // cancel(this.#tokenExpirationTimeout);
    // this.#tokenExpirationTimeout = null;
  }

  async restore(data) {
    return data;

    // const now = DateTime.now().toUnixInteger();
    // const jwt = data.jwt;
    // let exp = data.exp;

    // if (!exp) {
    //   // Fetch the expiration time from the token data since `exp` wasn't included in the data object that was passed in.
    //   const tokenData = jwtDecode(jwt);
    //   exp = tokenData['exp'];
    // }

    // if (exp > now) {
    //   this.scheduleAccessTokenExpiration(exp);
    //   return { jwt, exp };
    // } else {
    //   throw new Error('token is expired');
    // }
  }

  // scheduleAccessTokenExpiration(expiresAt) {
  //   const now = DateTime.now().toUnixInteger();
  //   const wait = Math.max((expiresAt - now) * 1000, 0);

  //   // eslint-disable-next-line ember/no-runloop
  //   cancel(this.#tokenExpirationTimeout);
  //   this.#tokenExpirationTimeout = null;
  //   // eslint-disable-next-line ember/no-runloop
  //   this.#tokenExpirationTimeout = later(
  //     this,
  //     async () => {
  //       await this.invalidate();
  //       this.trigger('sessionDataInvalidated');
  //     },
  //     wait,
  //   );
  // }

  // async loginWithCredentials(data, loginHeaders) {
  //   const host = '';
  //   const response = await fetch(`${host}/auth/login`, {
  //     method: 'POST',
  //     headers: {
  //       Accept: 'application/json',
  //       'Content-Type': 'application/json',
  //       ...loginHeaders,
  //     },
  //     body: JSON.stringify(data),
  //   });

  //   const { statusText, status, headers } = response;
  //   const text = await response.text();
  //   const json = JSON.parse(text);
  //   if (!response.ok) {
  //     throw {
  //       statusText,
  //       status,
  //       headers,
  //       text,
  //       json,
  //     };
  //   }

  //   const { exp } = jwtDecode(json.jwt);
  //   return { jwt: json.jwt, exp };
  // }

  // #extractTokenAndSetupExpiration(jwt) {
  //   const { exp } = jwtDecode(jwt);
  //   this.scheduleAccessTokenExpiration(exp);

  //   return { jwt, exp };
  // }
}
