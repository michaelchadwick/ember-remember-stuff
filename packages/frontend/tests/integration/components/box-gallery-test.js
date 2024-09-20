import { module, test } from 'qunit';
import { setupRenderingTest } from 'frontend/tests/helpers';
import { render } from '@ember/test-helpers';
import { hbs } from 'ember-cli-htmlbars';
import { component } from 'rs-common/page-objects/components/box-gallery';

module('Integration | Component | box-gallery', function (hooks) {
  setupRenderingTest(hooks);

  test('it renders', async function (assert) {
    this.set('boxes', [{ text: "Hello, I'm a Box" }, { text: "I'm a different Box" }]);
    await render(hbs`<BoxGallery @boxes={{this.boxes}} />`);

    assert.strictEqual(component.boxes.length, 2);
  });

  test('it creates new Box', async function (assert) {
    this.set('boxes', [{ text: "Hello, I'm a Box" }, { text: "I'm a different Box" }]);
    await render(hbs`<BoxGallery @boxes={{this.boxes}} />`);

    assert.strictEqual(component.boxes.length, 2);

    await component.new();

    assert.strictEqual(component.boxes.length, 3);
  });
});
