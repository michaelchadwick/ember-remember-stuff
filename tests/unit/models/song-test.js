import { module, test } from 'qunit';
import { setupTest } from 'remember-stuff/tests/helpers';

module('Unit | Model | song', function (hooks) {
  setupTest(hooks);

  test('it exists', function (assert) {
    let store = this.owner.lookup('service:store');
    let model = store.createRecord('song', {});
    assert.ok(model);
  });
});
