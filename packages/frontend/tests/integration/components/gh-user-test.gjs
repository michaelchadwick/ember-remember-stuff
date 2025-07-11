import { module, test } from 'qunit';
import { setupRenderingTest } from 'frontend/tests/helpers';
import { render } from '@ember/test-helpers';
import GhUser from "frontend/components/gh-user";

module('Integration | Component | gh-user', function (hooks) {
  setupRenderingTest(hooks);

  test('it renders with a username', async function (assert) {
    await render(<template><GhUser @username="michaelchadwick" /></template>);

    assert
      .dom()
      .hasText('GithubUser (FE) michaelchadwick Public Repos: Public Gists: Followers: Following:');
  });
});
