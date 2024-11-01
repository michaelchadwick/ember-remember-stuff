import JSONAPIAdapter from '@ember-data/adapter/json-api';

export default class GhUserAdapter extends JSONAPIAdapter {
  namespace = 'api';

  buildURL(...args) {
    return `${super.buildURL(...args)}.json`;
  }
}
