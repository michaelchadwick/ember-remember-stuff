import { module, test } from 'qunit';

import { setupTest } from 'remember-stuff/tests/helpers';

module('Unit | Model | gh user', function (hooks) {
  setupTest(hooks);

  // Replace this with your real tests.
  test('it exists', function (assert) {
    let store = this.owner.lookup('service:store');
    let model = store.createRecord('gh-user', {});
    assert.ok(model);
  });
});
