import { module, test } from 'qunit';
import { setupApplicationTest } from 'frontend/tests/helpers';

module('Acceptance | sanity check', function (hooks) {
  setupApplicationTest(hooks);

  test('will always(?) be true', function (assert) {
    assert.false(false, 'false is false');
    assert.true(true, 'true is true');
    assert.notStrictEqual(2 + 2, 5);
    // eslint-disable-next-line qunit/no-ok-equality
    assert.ok(2 !== 3);
  });
});
