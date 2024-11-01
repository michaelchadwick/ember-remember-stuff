import JSONAPIAdapter from '@ember-data/adapter/json-api';

export default class UserAdapter extends JSONAPIAdapter {
  namespace = 'api';

  buildURL(...args) {
    return `${super.buildURL(...args)}.json`;
  }
}
