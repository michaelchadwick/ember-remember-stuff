import { module, test } from 'qunit';
import { setupRenderingTest } from 'remember-stuff/tests/helpers';
import { render } from '@ember/test-helpers';
import { hbs } from 'ember-cli-htmlbars';

module('Integration | Helper | split', function (hooks) {
  setupRenderingTest(hooks);

  test('it gets first directory in file path', async function (assert) {
    this.set('inputValue', '/foo/bar/baz');

    await render(hbs`{{split this.inputValue delimiter='/' index=1}}`);

    assert.strictEqual(this.element.textContent.trim(), 'foo');
  });

  test('it gets last directory in file path', async function (assert) {
    this.set('inputValue', '/foo/bar/baz');

    await render(hbs`{{split this.inputValue delimiter='/' index=3}}`);

    assert.strictEqual(this.element.textContent.trim(), 'baz');
  });
});
