// import { isEmpty } from '@ember/utils';
// import { get } from '@ember/object';
import Service, { service } from '@ember/service';
// import { DateTime } from 'luxon';
// import jwtDecode from 'rs-common/utils/jwt-decode';
// import { uniqueValues } from 'rs-common/utils/array-helpers';

export default class CurrentUserService extends Service {
  @service store;
  @service session;
  _userPromise = null;

  get currentUserId() {
    // if (
    //   !this.session ||
    //   !this.session.data ||
    //   !this.session.data.authenticated ||
    //   !this.session.data.authenticated.jwt
    // ) {
    //   return null;
    // }
    // const obj = jwtDecode(this.session.data.authenticated.jwt);

    // return get(obj, 'user_id');
    return 1;
  }

  async getModel() {
    const currentUserId = this.currentUserId;
    if (!currentUserId) {
      return null;
    }
    const user = this.store.peekRecord('user', currentUserId);
    if (user) {
      return user;
    }

    if (!this._userPromise) {
      this._userPromise = this.store.findRecord('user', currentUserId);
    }
    return await this._userPromise;
  }
}
