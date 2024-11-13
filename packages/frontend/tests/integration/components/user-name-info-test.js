import { module, test, skip } from 'qunit';
import { setupRenderingTest } from 'frontend/tests/helpers';
import { render } from '@ember/test-helpers';
import { hbs } from 'ember-cli-htmlbars';
import { component } from 'rs-common/page-objects/components/user-name-info';
import { setupMirage } from 'frontend/tests/test-support/mirage';

module('Integration | Component | user-name-info', function (hooks) {
  setupRenderingTest(hooks);
  setupMirage(hooks);

  test('it renders empty with no @user', async function (assert) {
    await render(hbs`<UserNameInfo />`);
    assert.strictEqual(component.fullName, '', 'it shows nothing if no @user');
  });

  test('it renders name with @user', async function (assert) {
    const user = this.server.create('user');
    const userModel = await this.owner.lookup('service:store').findRecord('user', user.id);
    this.set('user', userModel);

    await render(hbs`<UserNameInfo @user={{this.user}} />`);
    assert.strictEqual(component.fullName, 'Mike M', 'it shows name if @user supplied');
  });

  skip('it renders with additional info when configured to do so', async function (assert) {
    const user = this.server.create('user', { displayName: 'Clem Chowder' });
    const userModel = await this.owner.lookup('service:store').findRecord('user', user.id);
    this.set('user', userModel);

    await render(hbs`<UserNameInfo @user={{this.user}} />`);
    assert.strictEqual(component.fullName, 'Clem Chowder');

    await render(hbs`<UserNameInfo @user={{this.user}} />`);
    assert.strictEqual(component.fullName, 'Clem Chowder');
  });
});
