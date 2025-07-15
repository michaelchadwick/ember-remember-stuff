import { module, test } from 'qunit';
import { setupRenderingTest } from 'frontend/tests/helpers';
import { render } from '@ember/test-helpers';
import Counter from 'frontend/components/counter';

module('Integration | Component | counter', function (hooks) {
  setupRenderingTest(hooks);

  test('it renders', async function (assert) {
    await render(<template><Counter /></template>);

    assert.dom('.counter').exists();
  });
});
