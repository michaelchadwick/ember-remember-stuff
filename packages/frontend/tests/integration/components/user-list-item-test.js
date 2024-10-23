import { module, test } from 'qunit';
import { setupRenderingTest } from 'frontend/tests/helpers';
import { render } from '@ember/test-helpers';
import { hbs } from 'ember-cli-htmlbars';

module('Integration | Component | user-list-item', function (hooks) {
  setupRenderingTest(hooks);

  test('it renders', async function (assert) {
    this.user = {
      id: 1,
      fullName: 'Mike M',
      email: 'mikem@place.com',
    };
    await render(hbs`<UserListItem @user={{this.user}} />`);

    assert.dom().hasText('1 Mike M mikem@place.com');
  });
});
