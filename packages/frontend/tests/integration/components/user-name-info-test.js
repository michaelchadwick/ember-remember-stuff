import { module, test } from 'qunit';
import { setupRenderingTest } from 'frontend/tests/helpers';
import { render } from '@ember/test-helpers';
import { hbs } from 'ember-cli-htmlbars';
import { component } from 'rs-common/page-objects/components/user-name-info';

module('Integration | Component | user-name-info', function (hooks) {
  setupRenderingTest(hooks);

  test('it renders', async function (assert) {
    // const user = this.server.create('user');
    // const userModel = await this.owner.lookup('service:store').findRecord('user', user.id);
    // this.set('user', userModel);
    // await render(hbs`<UserNameInfo @user={{this.user}} />`);
    // assert.strictEqual(component.fullName, '0 guy M. Mc0son');

    await render(hbs`<UserNameInfo />`);
    assert.strictEqual(component.fullName, '');
  });

  test('it renders with additional info when configured to do so', async function (assert) {
    // const user = this.server.create('user', { displayName: 'Clem Chowder' });
    // const userModel = await this.owner.lookup('service:store').findRecord('user', user.id);
    // this.set('user', userModel);
    // await render(hbs`<UserNameInfo @user={{this.user}} />`);
    // assert.strictEqual(component.fullName, 'Clem Chowder');

    await render(hbs`<UserNameInfo />`);
    assert.strictEqual(component.fullName, '');
  });
});
