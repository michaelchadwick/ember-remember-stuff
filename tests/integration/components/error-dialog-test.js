import { module, test } from 'qunit';
import { setupIntl } from 'ember-intl/test-support';
import { setupRenderingTest } from 'remember-stuff/tests/helpers';
import { render } from '@ember/test-helpers';
import { hbs } from 'ember-cli-htmlbars';

module('Integration | Component | error-dialog', function (hooks) {
  setupRenderingTest(hooks);
  setupIntl(hooks, 'en-us');

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
