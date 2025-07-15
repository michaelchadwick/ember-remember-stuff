import { module, test } from 'qunit';
import { setupRenderingTest } from 'frontend/tests/helpers';
import { render } from '@ember/test-helpers';
import t from 'ember-intl/helpers/t';
import Message from 'frontend/components/message';

module('Integration | Component | message', function (hooks) {
  setupRenderingTest(hooks);

  test('it renders', async function (assert) {
    await render(
      <template>
        <Message
          @id="message-0"
          @username="Tomster"
          @userIsActive={{true}}
          @userIsCurrent={{false}}
          @userLocalTime="5:15 PM"
        >
          <p>{{t "general.greeting" name="Tomster"}}</p>
        </Message>
      </template>,
    );

    assert.dom('.message').exists();
    assert.dom('.message aside').exists();
    assert.dom('.message aside .avatar.is-active').exists();
    assert.dom('.message section').exists();
    assert.dom('.message section p').hasText("Hello, I'm Tomster");
  });
});
