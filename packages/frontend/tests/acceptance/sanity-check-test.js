import { module, test } from 'qunit';
import { setupApplicationTest } from 'frontend/tests/helpers';

module('Acceptance | sanity check', function (hooks) {
  setupApplicationTest(hooks);

  test('will always(?) be true', async function (assert) {
    assert.true(true);
  });

  test('will always(?) be false', async function (assert) {
    assert.strictEqual(2 + 2, 5);
  });
});
