import { module, test } from 'qunit';
import { setupIntl } from 'ember-intl/test-support';
import { setupRenderingTest } from 'remember-stuff/tests/helpers';
import { render } from '@ember/test-helpers';
import { hbs } from 'ember-cli-htmlbars';

module('Integration | Component | gh-user', function (hooks) {
  setupRenderingTest(hooks);
  setupIntl(hooks, 'en-us');

  test('it renders with a username', async function (assert) {
    await render(hbs`<GhUser @username='michaelchadwick' />`);

    assert.dom().hasText('GithubUser michaelchadwick (repos: )');
  });
});
