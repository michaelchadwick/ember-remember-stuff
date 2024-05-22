import { module, test } from 'qunit';
import { setupRenderingTest } from 'remember-stuff/tests/helpers';
import { render } from '@ember/test-helpers';
import { hbs } from 'ember-cli-htmlbars';

module('Integration | Component | message-username', function (hooks) {
  setupRenderingTest(hooks);

  test('it renders', async function (assert) {
    await render(hbs`<Message::Username @name="Tomster" />`);

    assert.dom().hasText('Tomster');

    await render(hbs`<Message::Username @name="Tomster" @localTime='5:15 PM' />`);

    assert.dom().hasText('Tomster Local time: 5:15 PM');
  });
});
