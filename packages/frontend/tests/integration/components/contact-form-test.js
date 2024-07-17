import { module, test } from 'qunit';
import { setupRenderingTest } from 'frontend/tests/helpers';
import { render } from '@ember/test-helpers';
import { hbs } from 'ember-cli-htmlbars';

module('Integration | Component | contact-form', function (hooks) {
  setupRenderingTest(hooks);

  test('it renders', async function (assert) {
    await render(hbs`<Forms::ContactForm />`);

    assert.dom('.contact-form').exists();
    assert
      .dom('.contact-form p')
      .hasText('Want to say hello? Have a suggestion for this app? Drop me a line.');
  });
});
