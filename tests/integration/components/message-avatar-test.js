import { module, test } from 'qunit';
import { setupRenderingTest } from 'remember-stuff/tests/helpers';
import { render } from '@ember/test-helpers';
import { hbs } from 'ember-cli-htmlbars';

module('Integration | Component | message-avatar', function (hooks) {
  setupRenderingTest(hooks);

  test('it renders', async function (assert) {
    await render(hbs`<Message::Avatar />`);

    assert.dom('aside div.avatar').exists();
  });
});
