import { module, test } from 'qunit';
import { setupIntl } from 'ember-intl/test-support';
import { setupRenderingTest } from 'remember-stuff/tests/helpers';
import { render } from '@ember/test-helpers';
import { hbs } from 'ember-cli-htmlbars';

module('Integration | Component | contact-form', function (hooks) {
  setupRenderingTest(hooks);
  setupIntl(hooks, 'en-us');

  test('it renders', async function (assert) {
    await render(hbs`<Forms::ContactForm />`);

    assert.dom('.contact-form').exists();
    assert
      .dom('.contact-form p')
      .hasText('Want to say hello? Have a suggestion for this app? Drop me a line.');
  });
});
