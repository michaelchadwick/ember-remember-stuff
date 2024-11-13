import { module, test } from 'qunit';
import { setupRenderingTest } from 'frontend/tests/helpers';
import { render } from '@ember/test-helpers';
import { hbs } from 'ember-cli-htmlbars';
import { component } from 'frontend/tests/pages/components/user-list';
import { setupMirage } from 'frontend/tests/test-support/mirage';

module('Integration | Component | user-list', function (hooks) {
  setupRenderingTest(hooks);
  setupMirage(hooks);

  test('it renders with no users', async function (assert) {
    await render(hbs`<UserList />`);

    assert.strictEqual(component.users.length, 0);
  });

  test('it renders with some users', async function (assert) {
    // These overrides do nothing for return values -_-
    // const user1 = this.server.create('user', {
    //   firstName: 'Aardvark',
    //   lastName: 'Anteater',
    //   displayName: 'Aardy A',
    //   email: 'aardvark@test.edu',
    //   root: false,
    // });
    // const user2 = this.server.create('user', {
    //   firstName: 'Bennifred',
    //   lastName: 'Bunchford',
    //   displayName: 'Benny B',
    //   email: 'bbunchford@test.edu',
    //   root: false,
    // });
    const user1 = this.server.create('user');
    const user2 = this.server.create('user');

    console.log('user1/user2', user1, user2);

    const userModel1 = await this.owner.lookup('service:store').findRecord('user', user1.id);
    const userModel2 = await this.owner.lookup('service:store').findRecord('user', user2.id);
    this.set('users', [userModel1, userModel2]);

    console.log('users', this.users);
    console.log(component.users);

    await render(hbs`<UserList @users={{this.users}} />`);

    assert.strictEqual(component.users.length, 2);
  });
});
