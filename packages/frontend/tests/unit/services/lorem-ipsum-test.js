import { module, test } from 'qunit';
import { setupTest } from 'ember-qunit';

module('Unit | Service | lorem-ipsum', function (hooks) {
  setupTest(hooks);

  test('it exists', function (assert) {
    let service = this.owner.lookup('service:lorem-ipsum');
    assert.ok(service);
  });
});
