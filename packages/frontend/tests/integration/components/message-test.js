import { module, test } from 'qunit';
import { t } from 'ember-intl/test-support';
import { setupRenderingTest } from 'remember-stuff/tests/helpers';
import { render } from '@ember/test-helpers';
import { hbs } from 'ember-cli-htmlbars';

module('Integration | Component | message', function (hooks) {
  setupRenderingTest(hooks);

  test('it renders', async function (assert) {
    await render(hbs`
      <Message
        @id='message-0'
        @username='Tomster'
        @userIsActive={{true}}
        @userIsCurrent={{false}}
        @userLocalTime='5:15 PM'
      >
        <p>{{t 'general.hello' name='Tomster'}}</p>
      </Message>
    `);

    assert.dom('.message').exists();
    assert.dom('.message aside').exists();
    assert.dom('.message aside .avatar.is-active').exists();
    assert.dom('.message section').exists();
    assert.dom('.message section p').hasText(t('general.hello', { name: 'Tomster' }));
  });
});
