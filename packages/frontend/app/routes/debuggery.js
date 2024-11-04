import Route from '@ember/routing/route';
import { service } from '@ember/service';
import { hash } from 'rsvp';
import ENV from 'frontend/config/environment';

export default class DebuggeryRoute extends Route {
  @service headData;
  @service store;
  @service daveApi;
  @service('local-storage') ls;

  beforeModel() {
    this.headData.routeTitle = 'Debuggery';
  }

  async model() {
    let daveData;

    try {
      daveData = await this.daveApi.fetchData('?config');
    } catch (e) {
      console.error('DaveAPI error', e);
      daveData.body = 'No data received from Dave.';
    }

    if (this.ls.get('detailsGalleryExpanded')) {
      this.detailsGalleryExpanded = this.ls.get('detailsGalleryExpanded');
    }

    return hash({
      dave: daveData.body,
      detailsGalleryExpanded: this.detailsGalleryExpanded,
      ghUser: this.store.findRecord('gh-user', ENV.APP.GITHUB_USERNAME),
    });
  }

  async afterModel() {
    await import('zxcvbn');
  }
}
