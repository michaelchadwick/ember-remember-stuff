import { module, test } from 'qunit';
import { setupRenderingTest } from 'frontend/tests/helpers';
import { render } from '@ember/test-helpers';
import split from 'frontend/helpers/split';

module('Integration | Helper | split', function (hooks) {
  setupRenderingTest(hooks);

  test('it gets first directory in file path', async function (assert) {
    this.set('inputValue', '/foo/bar/baz');

    await render(<template>{{split this.inputValue delimiter="/" index=1}}</template>);

    assert.strictEqual(this.element.textContent.trim(), 'foo');
  });

  test('it gets last directory in file path', async function (assert) {
    this.set('inputValue', '/foo/bar/baz');

    await render(<template>{{split this.inputValue delimiter="/" index=3}}</template>);

    assert.strictEqual(this.element.textContent.trim(), 'baz');
  });
});
