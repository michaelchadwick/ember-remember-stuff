import { module, test } from 'qunit';
import { setupRenderingTest } from 'frontend/tests/helpers';
import { render } from '@ember/test-helpers';
import Ribbon from 'frontend/components/layout/ribbon';

module('Integration | Component | ribbon', function (hooks) {
  setupRenderingTest(hooks);

  test('it renders', async function (assert) {
    await render(<template><Ribbon /></template>);

    assert.dom('.ribbon').exists();

    await render(<template><Ribbon @position="left" @content="development" /></template>);

    assert.dom('.ribbon').hasClass('dev');
    assert.dom('.ribbon').hasClass('left');
    assert.dom('.ribbon').hasAttribute('data-title', 'dev');
  });
});
