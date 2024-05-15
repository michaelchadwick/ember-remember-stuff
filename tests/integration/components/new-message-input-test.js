import { module, test } from 'qunit';
import { setupRenderingTest } from 'ember-fake-chat/tests/helpers';
import { render } from '@ember/test-helpers';
import { hbs } from 'ember-cli-htmlbars';

module('Integration | Component | new-message-input', function (hooks) {
  setupRenderingTest(hooks);

  test('it renders', async function (assert) {
    // Set any properties with this.set('myProperty', 'value');
    // Handle any actions with this.set('myAction', function(val) { ... });

    await render(hbs`<NewMessageInput />`);

    assert.dom().hasText('');

    // Template block usage:
    await render(hbs`
      <NewMessageInput>
        template block text
      </NewMessageInput>
    `);

    assert.dom().hasText('template block text');
  });
});
