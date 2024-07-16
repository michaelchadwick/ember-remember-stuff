import { module, test } from 'qunit';
import { setupTest } from 'remember-stuff/tests/helpers';

module('Unit | Controller | application', function (hooks) {
  setupTest(hooks);

  test('it exists', function (assert) {
    let controller = this.owner.lookup('controller:application');
    assert.ok(controller);
  });
});
