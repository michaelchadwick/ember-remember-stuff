import { module, test } from 'qunit';
import { setupRenderingTest } from 'remember-stuff/tests/helpers';
import { render } from '@ember/test-helpers';
import { hbs } from 'ember-cli-htmlbars';

module('Integration | Component | new-message-input', function (hooks) {
  setupRenderingTest(hooks);

  test('it renders', async function (assert) {
    await render(hbs`<NewMessageInput />`);

    assert.dom('input#new-message-text').exists();
  });
});
