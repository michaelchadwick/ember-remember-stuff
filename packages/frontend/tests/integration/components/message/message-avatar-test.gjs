import { module, test } from 'qunit';
import { setupRenderingTest } from 'frontend/tests/helpers';
import { render } from '@ember/test-helpers';
import Avatar from "frontend/components/message/avatar";

module('Integration | Component | message-avatar', function (hooks) {
  setupRenderingTest(hooks);

  test('it renders', async function (assert) {
    await render(<template><Avatar /></template>);

    assert.dom('aside div.avatar').exists();
  });
});
