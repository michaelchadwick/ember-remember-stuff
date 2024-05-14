import { module, test } from 'qunit';
import { setupRenderingTest } from 'ember-components/tests/helpers';
import { render } from '@ember/test-helpers';
import { hbs } from 'ember-cli-htmlbars';

module('Integration | Component | received-message-username', function (hooks) {
  setupRenderingTest(hooks);

  test('it renders', async function (assert) {
    // Set any properties with this.set('myProperty', 'value');
    // Handle any actions with this.set('myAction', function(val) { ... });

    await render(hbs`<ReceivedMessageUsername />`);

    assert.dom().hasText('');

    // Template block usage:
    await render(hbs`
      <ReceivedMessageUsername>
        template block text
      </ReceivedMessageUsername>
    `);

    assert.dom().hasText('template block text');
  });
});
