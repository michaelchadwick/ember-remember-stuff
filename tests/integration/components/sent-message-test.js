import { module, test } from 'qunit';
import { setupRenderingTest } from 'ember-components/tests/helpers';
import { render } from '@ember/test-helpers';
import { hbs } from 'ember-cli-htmlbars';

module('Integration | Component | sent-message', function (hooks) {
  setupRenderingTest(hooks);

  test('it renders', async function (assert) {
    // Set any properties with this.set('myProperty', 'value');
    // Handle any actions with this.set('myAction', function(val) { ... });

    await render(hbs`<SentMessage />`);

    assert.dom().hasText('');

    // Template block usage:
    await render(hbs`
      <SentMessage>
        template block text
      </SentMessage>
    `);

    assert.dom().hasText('template block text');
  });
});
