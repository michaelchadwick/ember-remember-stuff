import Route from '@ember/routing/route';
import { service } from '@ember/service';
import { action } from '@ember/object';

export default class SongsRoute extends Route {
  @service store;
  @service headData;

  // beforeModel() {
  //   this.store.unloadAll('song');
  // }

  model() {
    console.log('this.store', this.store);

    return this.store.findAll('song');
  }

  afterModel() {
    this.headData.routeTitle = 'Songs';
  }

  @action
  loading(transition) {
    transition.promise.finally(() => {
      let start = new Date();
      console.log(`Took ${new Date() - start}ms to load`);
    });

    return true;
  }
}
