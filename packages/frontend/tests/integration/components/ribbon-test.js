import { module, test } from 'qunit';
import { setupRenderingTest } from 'frontend/tests/helpers';
import { render } from '@ember/test-helpers';
import { hbs } from 'ember-cli-htmlbars';

module('Integration | Component | ribbon', function (hooks) {
  setupRenderingTest(hooks);

  test('it renders', async function (assert) {
    await render(hbs`<Layout::Ribbon />`);

    assert.dom('.ribbon').exists();

    await render(hbs`<Layout::Ribbon @position='left' @content='development' />`);

    assert.dom('.ribbon').hasClass('dev');
    assert.dom('.ribbon').hasClass('left');
    assert.dom('.ribbon').hasText('dev');
  });
});
