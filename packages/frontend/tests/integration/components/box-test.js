import { module, test } from 'qunit';
import { setupRenderingTest } from 'frontend/tests/helpers';
import { render } from '@ember/test-helpers';
import { hbs } from 'ember-cli-htmlbars';
import { component } from 'rs-common/page-objects/components/box';

module('Integration | Component | box', function (hooks) {
  setupRenderingTest(hooks);

  test('it renders empty', async function (assert) {
    await render(hbs`<Box />`);
    assert.strictEqual(component.text, '');

    await render(hbs`<Box></Box>`);
    assert.dom(this.element).hasText('');
  });

  test('it renders', async function (assert) {
    this.set('text', 'Hello');
    await render(hbs`<Box @text={{this.text}} />`);

    assert.dom('.box').exists();
    assert.dom('.box .box-text').exists();
    assert.dom('.box .box-text');
  });
});
