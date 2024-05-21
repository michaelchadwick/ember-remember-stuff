import { module, test } from 'qunit';
import { setupRenderingTest } from 'ember-fake-chat/tests/helpers';
import { render } from '@ember/test-helpers';
import { hbs } from 'ember-cli-htmlbars';

module('Integration | Component | gh-user', function (hooks) {
  setupRenderingTest(hooks);

  test('it renders with a username', async function (assert) {
    await render(hbs`<GhUser @username='michaelchadwick' />`);

    assert.dom().hasText('GithubUser michaelchadwick (repos: )');
  });
});
