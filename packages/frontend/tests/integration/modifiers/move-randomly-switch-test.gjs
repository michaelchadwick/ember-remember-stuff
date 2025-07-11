import { module, test } from 'qunit';
import { setupRenderingTest } from 'ember-qunit';
import { render } from '@ember/test-helpers';
import moveRandomlySwitch from "frontend/modifiers/move-randomly-switch";

module('Integration | Modifier | move-randomly-switch', function (hooks) {
  setupRenderingTest(hooks);

  // Replace this with your real tests.
  test('it renders', async function (assert) {
    await render(<template><div {{moveRandomlySwitch}}></div></template>);

    assert.ok(true);
  });
});
