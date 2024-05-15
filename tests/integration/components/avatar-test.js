import { module, test } from 'qunit';
import { setupRenderingTest } from 'ember-fake-chat/tests/helpers';
import { render } from '@ember/test-helpers';
import { hbs } from 'ember-cli-htmlbars';

module('Integration | Component | avatar', function (hooks) {
  setupRenderingTest(hooks);

  test('it renders', async function (assert) {
    // Set any properties with this.set('myProperty', 'value');
    // Handle any actions with this.set('myAction', function(val) { ... });

    await render(hbs`<Avatar />`);

    assert.dom().hasText('');

    // Template block usage:
    await render(hbs`
      <Avatar>
        template block text
      </Avatar>
    `);

    assert.dom().hasText('template block text');
  });
});
