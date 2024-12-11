import Service, { service } from '@ember/service';
import ENV from 'frontend/config/environment';

export default class RsConfigService extends Service {
  @service fetch;
  @service serverVariables;
  _configPromise = null;

  async getConfig() {
    let config = {
      body: {
        config: {
          type: 'form',
          locale: 'en',
          apiVersion: 'v0.00',
          appVersion: '0.0.1',
          maxUploadSize: 10,
          searchEnabled: false,
          trackingEnabled: false,
          userSearchType: 'prod',
          awesomeLevel: 10,
          lameLevel: 10,
        },
      },
      contentType: null,
      customType: 'server',
      error: false,
      message: '',
      status: 200,
      statusText: 'OK',
    };

    console.log('ENV.environment', ENV.environment);

    if (ENV.environment != 'prod') {
      if (!this._configPromise) {
        this._configPromise = this.fetch.getJsonFromApiHost('?config');

        try {
          config = await this._configPromise;
        } catch (e) {
          console.error('config not received', e);
        }
      }
    }

    return config;
  }

  async itemFromConfig(key) {
    const config = await this.getConfig();
    const obj = config.body.config;
    return key in obj ? obj[key] : null;
  }

  async getUserSearchType() {
    return this.itemFromConfig('userSearchType');
  }

  async getAuthenticationType() {
    return this.itemFromConfig('type');
  }

  async getMaxUploadSize() {
    return this.itemFromConfig('maxUploadSize');
  }

  async getApiVersion() {
    return this.itemFromConfig('apiVersion');
  }

  async getAppVersion() {
    const version = await this.itemFromConfig('appVersion');
    //ignore this development and bad build version string
    if (version === '0.1.0') {
      return '';
    } else {
      return version ?? '';
    }
  }

  async getTrackingEnabled() {
    return this.itemFromConfig('trackingEnabled');
  }

  async getTrackingCode() {
    return this.itemFromConfig('trackingCode');
  }

  async getLoginUrl() {
    return this.itemFromConfig('loginUrl');
  }

  async getCasLoginUrl() {
    return this.itemFromConfig('casLoginUrl');
  }

  get apiNameSpace() {
    const apiNameSpace = this.serverVariables.get('apiNameSpace');
    if (apiNameSpace) {
      //remove trailing slashes
      return apiNameSpace.replace(/\/+$/, '');
    }
    return '';
  }

  get apiHost() {
    const apiHost = this.serverVariables.get('apiHost');

    if (apiHost) {
      //remove trailing slashes
      return apiHost.replace(/\/+$/, '');
    }
    return '';
  }

  get errorCaptureEnabled() {
    const errorCaptureEnabled = this.serverVariables.get('errorCaptureEnabled');
    if (typeof errorCaptureEnabled === 'boolean') {
      return errorCaptureEnabled;
    }

    return errorCaptureEnabled === 'true';
  }

  async getSearchEnabled() {
    const searchEnabled = await this.itemFromConfig('searchEnabled');
    if (searchEnabled === null) {
      return false;
    }
    if (typeof searchEnabled === 'boolean') {
      return searchEnabled;
    }

    return searchEnabled === 'true';
  }

  async lameLevel() {
    return this.itemFromConfig('lameLevel');
  }

  async awesomeLevel() {
    return this.itemFromConfig('awesomeLevel');
  }
}
