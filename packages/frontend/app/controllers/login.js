import Controller from '@ember/controller';
import { service } from '@ember/service';
import { tracked } from '@glimmer/tracking';
import { dropTask } from 'ember-concurrency';

export default class LoginController extends Controller {
  @service rsConfig;
  @service session;
  @tracked jwt = null;
  @tracked error = null;

  login = dropTask(async () => {
    this.error = null;

    if (this.jwt) {
      // const apiHost = this.rsConfig.get('apiHost');
      // const url = `${apiHost}/auth/token`;
      // const response = await fetch(url, {
      //   headers: {
      //     'X-JWT-Authorization': `Token ${this.jwt}`,
      //   },
      // });

      // if (response.ok) {
      //   const authenticator = 'authenticator:rs-jwt';
      //   this.session.authenticate(authenticator, { jwt: this.jwt });
      // } else {
      //   this.error = await response.text();
      // }

      const authenticator = 'authenticator:rs-jwt';
      this.session.authenticate(authenticator, { jwt: this.jwt });
    }
  });

  loginOnEnter = dropTask(async (event) => {
    const keyCode = event.keyCode;
    if (13 === keyCode) {
      await this.login.perform();
    }
  });
}
