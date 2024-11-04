import Service, { inject as service } from '@ember/service';
import ENV from 'frontend/config/environment';

export default class LocalStorageService extends Service {
  @service intl;

  get(item = null) {
    const settings = JSON.parse(localStorage.getItem(ENV.APP.LOCAL_STORAGE_KEY));

    if (settings) {
      if (item) {
        const keyVal = settings[item];

        if (keyVal) {
          return settings[item];
        } else {
          return this.intl.t('errors.lsGetItemFail', {
            keyName: ENV.APP.LOCAL_STORAGE_KEY,
            itemName: item,
          });
        }
      } else {
        return settings;
      }
    } else {
      // return this.intl.t('errors.lsGetFail', { keyName: ENV.APP.LOCAL_STORAGE_KEY });
      return localStorage.setItem(
        ENV.APP.LOCAL_STORAGE_KEY,
        JSON.stringify({
          detailsGalleryExpanded: false,
        }),
      );
    }
  }

  set(item, val) {
    const settings = JSON.parse(localStorage.getItem(ENV.APP.LOCAL_STORAGE_KEY));

    if (settings) {
      settings[item] = val;
      localStorage.setItem(ENV.APP.LOCAL_STORAGE_KEY, JSON.stringify(settings));
    } else {
      return this.intl.t('errors.lsSetItemFail', {
        keyName: ENV.APP.LOCAL_STORAGE_KEY,
        itemName: item,
        val: val,
      });
    }
  }
}
