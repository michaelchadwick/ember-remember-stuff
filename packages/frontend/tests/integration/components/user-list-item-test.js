import { module, test } from 'qunit';
import { setupRenderingTest } from 'frontend/tests/helpers';
import { render } from '@ember/test-helpers';
import { hbs } from 'ember-cli-htmlbars';
import { setupMirage } from 'frontend/tests/test-support/mirage';

module('Integration | Component | user-list-item', function (hooks) {
  setupRenderingTest(hooks);
  setupMirage(hooks);

  test('it renders', async function (assert) {
    // This override does nothing for return values -_-
    // const user1 = this.server.create('user', {
    //   firstName: 'Bob',
    //   lastName: 'Badness',
    //   displayName: 'Bob B',
    //   email: 'bobb@internet.com',
    //   root: false,
    // });

    // gotta at least create a user, and then it pulls from api/users/1.json
    const user1 = this.server.create('user');
    const userModel1 = await this.owner.lookup('service:store').findRecord('user', user1.id);
    this.set('user', userModel1);
    this.kloutLevel = 3;
    this.rowLevel = 2;

    await render(hbs`<UserListItem @user={{this.user}} @showLevels={{false}} />`);

    assert
      .dom()
      .hasText('1 Mike M mmadness@chaosville.net', 'shows id, name, email, and no levels');

    await render(hbs`<UserListItem @user={{this.user}} @showLevels={{true}} />`);

    assert
      .dom()
      .hasText(
        '1 Mike M (0, 0) mmadness@chaosville.net',
        'shows id, name, email, and default klout/row levels',
      );

    await render(
      hbs`<UserListItem
  @user={{this.user}}
  @kloutLevel={{this.kloutLevel}}
  @rowLevel={{this.rowLevel}}
  @showLevels={{true}}
/>`,
    );

    assert
      .dom()
      .hasText(
        '1 Mike M (3, 2) mmadness@chaosville.net',
        'shows id, name, email, and passed-in klout/row levels',
      );
  });
});
