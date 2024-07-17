import Service from '@ember/service';
import ENV from 'frontend/config/environment';

export default class LocalStorageService extends Service {
  settings = JSON.parse(localStorage.getItem(ENV.APP.LOCAL_STORAGE_KEY)) || {};

  get(key) {
    return this.settings[key];
  }

  set(key, val) {
    this.settings[key] = val;
    localStorage.setItem(ENV.APP.LOCAL_STORAGE_KEY, JSON.stringify(this.settings));
  }
}
