import { module, test } from 'qunit';
import { setupRenderingTest } from 'frontend/tests/helpers';
import { render } from '@ember/test-helpers';
import { hbs } from 'ember-cli-htmlbars';

module('Integration | Helper | format currency', function (hooks) {
  setupRenderingTest(hooks);

  test('formats 199 with $ as currency sign', async function (assert) {
    this.set('value', 199);
    this.set('sign', '$');

    await render(hbs`{{format-currency this.value sign=this.sign}}`);

    assert.strictEqual(this.element.textContent.trim(), '$1.99');

    this.set('sign', '€');

    assert.strictEqual(this.element.textContent.trim(), '€1.99', 'Value is formatted with €');
  });
});
