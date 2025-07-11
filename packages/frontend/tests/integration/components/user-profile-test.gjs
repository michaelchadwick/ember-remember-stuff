import { module, test } from 'qunit';
import { setupRenderingTest } from 'frontend/tests/helpers';
import { render } from '@ember/test-helpers';
import UserProfile from "frontend/components/user-profile";

module('Integration | Component | user-profile', function (hooks) {
  setupRenderingTest(hooks);

  test('it renders', async function (assert) {
    await render(<template><UserProfile /></template>);

    assert.dom().hasText('User');
  });
});
