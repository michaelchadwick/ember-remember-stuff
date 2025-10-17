import { module, test } from 'qunit';
import { setupRenderingTest } from 'frontend/tests/helpers';
import { render } from '@ember/test-helpers';
import Aardvark from 'frontend/components/aardvark';

module('Integration | Component | aardvark', function (hooks) {
  setupRenderingTest(hooks);

  test('it renders', async function (assert) {
    await render(<template><Aardvark /></template>);

    assert.dom('.ant-count').exists();
    assert.dom('.ant-count').hasText('10');
  });
});
