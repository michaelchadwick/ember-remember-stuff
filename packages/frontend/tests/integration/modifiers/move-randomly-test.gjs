import { module, test } from 'qunit';
import { setupRenderingTest } from 'ember-qunit';
import { render } from '@ember/test-helpers';
import moveRandomly from "frontend/modifiers/move-randomly";

module('Integration | Modifier | move-randomly', function (hooks) {
  setupRenderingTest(hooks);

  // Replace this with your real tests.
  test('it renders', async function (assert) {
    await render(<template><div {{moveRandomly}}></div></template>);

    assert.ok(true);
  });
});
