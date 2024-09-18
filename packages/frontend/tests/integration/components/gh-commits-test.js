import { module, test } from 'qunit';
import { setupRenderingTest } from 'frontend/tests/helpers';
import { render } from '@ember/test-helpers';
import { hbs } from 'ember-cli-htmlbars';

module('Integration | Component | gh-commits', function (hooks) {
  setupRenderingTest(hooks);

  test('it renders', async function (assert) {
    await render(hbs`<GhCommits />`);

    assert
      .dom()
      .hasText('GithubCommits (FE) No commits found. Check the development console for errors.');

    await render(hbs`<GhCommits @title='Last 5 Commits' />`);

    assert
      .dom()
      .hasText('Last 5 Commits No commits found. Check the development console for errors.');
  });
});
