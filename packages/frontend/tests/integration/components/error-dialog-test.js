import { module, test } from 'qunit';
import { setupRenderingTest } from 'remember-stuff/tests/helpers';
import { render } from '@ember/test-helpers';
import { hbs } from 'ember-cli-htmlbars';

module('Integration | Component | error-dialog', function (hooks) {
  setupRenderingTest(hooks);

  test('it renders', async function (assert) {
    await render(hbs`<ErrorDialog />`);

    assert.dom().hasText('An unknown error occurred!');

    // Template block usage:
    await render(hbs`
      <ErrorDialog>
        <p>{{t "errors.unknown"}}</p>
      </ErrorDialog>
    `);

    assert.dom().hasText(this.intl.t('errors.unknown'));
  });
});
