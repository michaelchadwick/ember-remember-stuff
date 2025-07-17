// taken from Ember Composable Helpers (https://github.com/DockYard/ember-composable-helpers), then modified.

import { module, test } from 'qunit';
import { setupRenderingTest } from 'frontend/tests/helpers';
import { click, render } from '@ember/test-helpers';
import { on } from '@ember/modifier';
import pick from 'rs-common/helpers/pick';

module('Integration | Helper | pick', function (hooks) {
  setupRenderingTest(hooks);

  test('Shorthand works when used with {{on}} modifier and optional action is provided', async function (assert) {
    assert.expect(1);

    this.set('label', 'foobar');
    this.set('onFocus', function (value) {
      assert.strictEqual(value, 'pizza party', 'The action receives the correct value');
    });

    await render(
      <template>
        <label>
          <input
            id="test-input"
            value="pizza party"
            {{on "focusin" (pick "target.value" this.onFocus)}}
          />
          {{this.label}}
        </label>
      </template>,
    );

    await click('#test-input');
  });
});
