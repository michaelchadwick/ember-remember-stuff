import { module, test } from 'qunit';
import { setupRenderingTest } from 'frontend/tests/helpers';
import { render } from '@ember/test-helpers';
import { hbs } from 'ember-cli-htmlbars';

module('Integration | Component | box-gallery', function (hooks) {
  setupRenderingTest(hooks);

  test('it renders', async function (assert) {
    this.set('boxes', [{ text: "Hello, I'm a Box" }, { text: "I'm a different Box" }]);
    await render(hbs`<BoxGallery />`);

    assert.dom('.box-gallery').exists();
    assert.dom('.box-gallery .boxes').exists();
  });
});
