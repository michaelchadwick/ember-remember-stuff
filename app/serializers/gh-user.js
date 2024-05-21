import JSONAPISerializer from '@ember-data/serializer/json-api';

export default class GhUserSerializer extends JSONAPISerializer {
  normalizeFindRecordResponse(store, type, payload) {
    return {
      data: {
        id: payload.login,
        type: type.modelName,
        attributes: {
          name: payload.name,
          publicRepos: payload.public_repos,
        },
      },
    };
  }
}
