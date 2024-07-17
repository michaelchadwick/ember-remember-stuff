import { module, test } from 'qunit';
import { setupIntl } from 'ember-intl/test-support';
import { setupRenderingTest } from 'frontend/tests/helpers';
import { render } from '@ember/test-helpers';
import { hbs } from 'ember-cli-htmlbars';

module('Integration | Component | message-username', function (hooks) {
  setupRenderingTest(hooks);
  setupIntl(hooks, 'en-us');

  test('it renders', async function (assert) {
    await render(hbs`<Message::Username @name="Tomster" />`);

    assert.dom().hasText('Tomster');

    await render(hbs`<Message::Username @name="Tomster" @localTime='5:15 PM' />`);

    assert.dom().hasText('Tomster Local time: 5:15 PM');
  });
});
