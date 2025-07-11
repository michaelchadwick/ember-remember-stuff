import { module, test } from 'qunit';
import { setupIntl } from 'ember-intl/test-support';
import { setupRenderingTest } from 'frontend/tests/helpers';
import { render } from '@ember/test-helpers';
import Username from 'frontend/components/message/username';

module('Integration | Component | message-username', function (hooks) {
  setupRenderingTest(hooks);
  setupIntl(hooks, 'en-us');

  test('it renders', async function (assert) {
    await render(<template><Username @name="Tomster" /></template>);

    assert.dom().hasText('Tomster');

    await render(<template><Username @name="Tomster" @localTime="5:15 PM" /></template>);

    assert.dom().hasText('Tomster Local time: 5:15 PM');
  });
});
