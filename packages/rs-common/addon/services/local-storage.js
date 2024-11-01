import Service from '@ember/service';
import ENV from 'frontend/config/environment';

export default class LocalStorageService extends Service {
  get(key) {
    const settings = JSON.parse(localStorage.getItem(ENV.APP.LOCAL_STORAGE_KEY));
    return settings[key];
  }

  set(key, val) {
    const settings = JSON.parse(localStorage.getItem(ENV.APP.LOCAL_STORAGE_KEY));
    settings[key] = val;
    localStorage.setItem(ENV.APP.LOCAL_STORAGE_KEY, JSON.stringify(settings));
  }
}
