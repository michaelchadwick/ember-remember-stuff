import { module, test } from 'qunit';
import { setupRenderingTest } from 'frontend/tests/helpers';
import { render } from '@ember/test-helpers';
import GhCommits from "frontend/components/gh-commits/index";

module('Integration | Component | gh-commits', function (hooks) {
  setupRenderingTest(hooks);

  test('it renders', async function (assert) {
    await render(<template><GhCommits /></template>);

    assert
      .dom()
      .hasText('GithubCommits (FE) No commits found. Check the development console for errors.');

    await render(<template><GhCommits @title="Last 5 Commits" /></template>);

    assert
      .dom()
      .hasText('Last 5 Commits No commits found. Check the development console for errors.');
  });
});
