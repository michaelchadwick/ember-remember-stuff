import { module, test } from 'qunit';
import { setupRenderingTest } from 'frontend/tests/helpers';
import { render } from '@ember/test-helpers';
import DoubleIt from 'frontend/components/double-it';

module('Integration | Component | double-it', function (hooks) {
  setupRenderingTest(hooks);

  test('it renders', async function (assert) {
    await render(<template><DoubleIt /></template>);

    assert.dom('.counter').exists();
  });
});
