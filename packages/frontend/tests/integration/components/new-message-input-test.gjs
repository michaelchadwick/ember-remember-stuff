import { module, test } from 'qunit';
import { setupRenderingTest } from 'frontend/tests/helpers';
import { render } from '@ember/test-helpers';
import NewMessageInput from "frontend/components/forms/new-message-input";

module('Integration | Component | new-message-input', function (hooks) {
  setupRenderingTest(hooks);

  test('it renders', async function (assert) {
    await render(<template><NewMessageInput /></template>);

    assert.dom('input#new-message-text').exists();
  });
});
