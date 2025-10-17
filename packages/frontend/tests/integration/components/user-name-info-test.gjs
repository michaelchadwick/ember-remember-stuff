import { module, test, skip } from 'qunit';
import { setupRenderingTest } from 'frontend/tests/helpers';
import { render } from '@ember/test-helpers';
import { component } from 'tc-common/page-objects/components/user-name-info';
import { setupMirage } from 'frontend/tests/test-support/mirage';
import UserNameInfo from 'frontend/components/user-name-info';

module('Integration | Component | user-name-info', function (hooks) {
  setupRenderingTest(hooks);
  setupMirage(hooks);

  test('it renders empty with no @user', async function (assert) {
    await render(<template><UserNameInfo /></template>);
    assert.strictEqual(component.fullName, '', 'it shows nothing if no @user');
  });

  test('it renders name with @user', async function (assert) {
    const user = this.server.create('user');
    const userModel = await this.owner.lookup('service:store').findRecord('user', user.id);
    this.set('user', userModel);

    await render(<template><UserNameInfo @user={{this.user}} /></template>);
    assert.strictEqual(component.fullName, 'Mike M', 'it shows name if @user supplied');
  });

  skip('it renders with additional info when configured to do so', async function (assert) {
    const user = this.server.create('user', { displayName: 'Clem Chowder' });
    const userModel = await this.owner.lookup('service:store').findRecord('user', user.id);
    this.set('user', userModel);

    await render(<template><UserNameInfo @user={{this.user}} /></template>);
    assert.strictEqual(component.fullName, 'Clem Chowder');

    await render(<template><UserNameInfo @user={{this.user}} /></template>);
    assert.strictEqual(component.fullName, 'Clem Chowder');
  });
});
