import { module, test } from 'qunit';
import { setupRenderingTest } from 'frontend/tests/helpers';
import { render } from '@ember/test-helpers';
import { hbs } from 'ember-cli-htmlbars';
import { component } from 'frontend/tests/pages/components/password-validator';

module('Integration | Component | password-validator', function (hooks) {
  setupRenderingTest(hooks);

  test('it renders', async function (assert) {
    await render(hbs`<PasswordValidator />`);

    assert.ok(component);
    assert.strictEqual(component.label, 'Password:');
  });

  test('it fails blank password', async function (assert) {
    await render(hbs`<PasswordValidator />`);

    assert.false(component.hasError);
    await component.submit();

    assert.true(component.hasError);
  });

  test('it fails short password', async function (assert) {
    await render(hbs`<PasswordValidator />`);

    await component.fillIn('abc');
    await component.submit();
    assert.true(component.hasError);
  });

  test('it passes valid password', async function (assert) {
    await render(hbs`<PasswordValidator />`);

    await component.fillIn('abcde');
    assert.false(component.hasError);
  });
});
