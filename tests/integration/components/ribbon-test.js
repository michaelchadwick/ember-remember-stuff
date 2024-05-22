import { module, test } from 'qunit';
import { setupRenderingTest } from 'remember-stuff/tests/helpers';
import { render } from '@ember/test-helpers';
import { hbs } from 'ember-cli-htmlbars';

module('Integration | Component | ribbon', function (hooks) {
  setupRenderingTest(hooks);

  test('it renders', async function (assert) {
    await render(hbs`<Ribbon />`);

    assert.dom('.ribbon').exists();

    await render(hbs`<Ribbon @position="left" @content="Foobar" />`);

    assert.dom('.ribbon').hasClass('left');
    assert.dom('.ribbon').hasText('Foobar');
  });
});
