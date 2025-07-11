import { module, test } from 'qunit';
import { setupRenderingTest } from 'frontend/tests/helpers';
import { render } from '@ember/test-helpers';
import Messages from "frontend/components/messages";

module('Integration | Component | messages', function (hooks) {
  setupRenderingTest(hooks);

  test('it renders', async function (assert) {
    await render(<template><Messages /></template>);

    assert.dom('.messages').hasAnyText();
  });
});
