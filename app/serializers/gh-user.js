import JSONAPISerializer from '@ember-data/serializer/json-api';

export default class GhUserSerializer extends JSONAPISerializer {
  normalizeFindRecordResponse(store, type, payload) {
    return {
      data: {
        id: payload.login,
        type: type.modelName,
        attributes: {
          ghUsername: payload.name,
          ghPublicRepos: payload.public_repos,
        },
      },
    };
  }
}
