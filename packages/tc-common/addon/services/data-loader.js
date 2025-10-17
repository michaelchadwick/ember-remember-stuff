import Service, { service } from '@ember/service';

export default class DataLoaderService extends Service {
  @service store;

  #loadedUserProfiles = new Map();

  async loadUserProfile(id) {
    if (!this.#loadedUserProfiles.has(id)) {
      this.#loadedUserProfiles.set(
        id,
        this.store.findRecord('user', id, {
          reload: true,
        }),
      );
    }

    return this.#loadedUserProfiles.get(id);
  }
}
