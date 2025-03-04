import { isEmpty } from '@ember/utils';
import { get } from '@ember/object';
import Service, { service } from '@ember/service';
import jwtDecode from 'rs-common/utils/jwt-decode';

export default class CurrentUserService extends Service {
  @service store;
  // @service session;

  _userPromise = null;

  // get currentUserId() {
  //   if (
  //     !this.session ||
  //     !this.session.data ||
  //     !this.session.data.authenticated ||
  //     !this.session.data.authenticated.jwt
  //   ) {
  //     return null;
  //   }
  //   const obj = jwtDecode(this.session.data.authenticated.jwt);

  //   return obj.user_id;
  // }

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
      this._userPromise = this.store.findRecord('user', currentUserId, {
        include: 'sessionMaterialStatuses',
      });
    }
    return await this._userPromise;
  }

  async getUserRoleTitles() {
    const user = await this.getModel();
    if (!user) {
      return [];
    }
    const roles = await user.get('roles');
    return roles.map((role) => role.get('title').toLowerCase());
  }

  get isRoot() {
    return this.getBooleanAttributeFromToken('is_root');
  }

  getBooleanAttributeFromToken(attribute) {
    const session = this.session;
    if (isEmpty(session)) {
      return false;
    }

    const jwt = session.get('data.authenticated.jwt');

    if (isEmpty(jwt)) {
      return false;
    }
    const obj = jwtDecode(jwt);

    return !!get(obj, attribute);
  }
}
