import { module, test } from 'qunit';
import { setupRenderingTest } from 'frontend/tests/helpers';
import { render } from '@ember/test-helpers';
import substring from "frontend/helpers/substring";

module('Integration | Helper | substring', function (hooks) {
  setupRenderingTest(hooks);

  test('it renders', async function (assert) {
    this.set('inputValue', 'Tomster');

    await render(<template>{{substring this.inputValue start=0 end=1}}</template>);

    assert.dom().hasText('T');
  });
});
