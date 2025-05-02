import { module, test, skip } from 'qunit';
import { setupTest } from 'ember-qunit';
import { setupMirage } from 'frontend/tests/test-support/mirage';

module('Unit | Service | rs config', function (hooks) {
  setupTest(hooks);
  setupMirage(hooks);

  hooks.beforeEach(function () {
    this.service = this.owner.lookup('service:rs-config');
    // this.server.get('application/config', function (schema, request) {
    //   console.log('rs-config-test.js: application/config', request);
    //   return {};
    // });
    // this.server.get('?config', function (schema, request) {
    //   console.log('rs-config-test.js: ?config', request);
    //   return {};
    // });
    // this.server.get('https://dave.neb.host/?config', function (schema, request) {
    //   console.log('rs-config-test.js: https://dave.neb.host/?config', request);
    //   return {};
    // });
    this.server.get('https://dave.neb.host/', function (schema, request) {
      // console.log('rs-config-test.js: https://dave.neb.host', request);

      if (request.queryParams.config) {
        console.info('https://dave.neb.host/?config intercepted');
      } else {
        console.info('https://dave.neb.host/ intercepted');
      }

      return {
        body: {
          config: {
            type: 'test_type-foo',
            apiVersion: '25',
            appVersion: '4.5.6',
            userSearchType: 'test_userSearchType-foo',
            random: 'test_random-foo',
            maxUploadSize: 'test_maxUploadSize-foo',
            trackingEnabled: 'test_trackingEnabled-foo',
            trackingCode: 'test_trackingCode-foo',
            loginUrl: 'test_loginUrl-foo',
            casLoginUrl: 'test_casLoginUrl-foo',
            awesomeLevel: 2,
            lameLevel: 5,
          },
        },
      };
    });
  });

  test('it exists', function (assert) {
    assert.ok(this.service);
  });
  skip('it gets item from config', async function (assert) {
    assert.strictEqual(await this.service.itemFromConfig('random'), 'test_random-foo');
  });
  skip('it gets user search type', async function (assert) {
    assert.strictEqual(await this.service.getUserSearchType(), 'test_userSearchType-foo');
  });
  skip('it gets authentication type', async function (assert) {
    assert.strictEqual(await this.service.getAuthenticationType(), 'test_type-foo');
  });
  skip('it gets maxUploadSize', async function (assert) {
    assert.strictEqual(await this.service.getMaxUploadSize(), 'test_maxUploadSize-foo');
  });
  skip('it gets apiVersion', async function (assert) {
    assert.strictEqual(await this.service.getApiVersion(), '25');
  });
  skip('it gets appVersion', async function (assert) {
    assert.strictEqual(await this.service.getAppVersion(), '4.5.6');
  });
  skip('it ignores empty appVersion', async function (assert) {
    this.server.get('https://dave.neb.host/', () => {
      return {
        body: { config: {} },
      };
    });
    assert.strictEqual(await this.service.getAppVersion(), '');
  });
  skip('it ignores development appVersion', async function (assert) {
    this.server.get('https://dave.neb.host/', () => {
      return {
        body: {
          config: {
            appVersion: '0.1.0',
          },
        },
      };
    });
    assert.strictEqual(await this.service.getAppVersion(), '');
  });
  skip('it gets trackingEnabled', async function (assert) {
    assert.strictEqual(await this.service.getTrackingEnabled(), 'test_trackingEnabled-foo');
  });
  skip('it gets trackingCode', async function (assert) {
    assert.strictEqual(await this.service.getTrackingCode(), 'test_trackingCode-foo');
  });
  skip('it gets loginUrl', async function (assert) {
    assert.strictEqual(await this.service.getLoginUrl(), 'test_loginUrl-foo');
  });
  skip('it gets casLoginUrl', async function (assert) {
    assert.strictEqual(await this.service.getCasLoginUrl(), 'test_casLoginUrl-foo');
  });
  skip('it gets awesomeLevel from global config', async function (assert) {
    assert.strictEqual(await this.service.awesomeLevel(), 2);
  });
  skip('it gets lameLevel from test', async function (assert) {
    assert.strictEqual(await this.service.lameLevel(), 5);
  });
});
