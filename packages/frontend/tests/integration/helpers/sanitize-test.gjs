import { module, test } from 'qunit';
import { setupRenderingTest } from 'frontend/tests/helpers';
import { render } from '@ember/test-helpers';
import sanitize from 'frontend/helpers/sanitize';

module('Integration | Helper | sanitize', function (hooks) {
  setupRenderingTest(hooks);

  // TODO: Replace this with your real tests.
  test('it renders', async function (assert) {
    this.set('inputValue', '1234');

    await render(<template>{{sanitize this.inputValue}}</template>);

    assert.dom().hasText('1234');
  });
});
