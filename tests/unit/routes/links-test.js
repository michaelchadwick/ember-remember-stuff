import { module, test } from 'qunit';
import { setupTest } from 'ember-fake-chat/tests/helpers';

module('Unit | Route | links', function (hooks) {
  setupTest(hooks);

  test('it exists', function (assert) {
    let route = this.owner.lookup('route:links');
    assert.ok(route);
  });
});
