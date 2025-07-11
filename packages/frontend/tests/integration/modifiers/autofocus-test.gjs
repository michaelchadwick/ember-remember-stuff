import { module, test } from 'qunit';
import { setupRenderingTest } from 'ember-qunit';
import { render } from '@ember/test-helpers';
import autofocus from "frontend/modifiers/autofocus";

module('Integration | Modifier | autofocus', function (hooks) {
  setupRenderingTest(hooks);

  test('it renders', async function (assert) {
    await render(<template><div {{autofocus}}></div></template>);

    assert.ok(true);
  });
});
