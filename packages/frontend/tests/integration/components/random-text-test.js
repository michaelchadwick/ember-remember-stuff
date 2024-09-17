import { module, test } from 'qunit';
import { setupRenderingTest } from 'frontend/tests/helpers';
import { render } from '@ember/test-helpers';
import { hbs } from 'ember-cli-htmlbars';

module('Integration | Component | random-text', function (hooks) {
  setupRenderingTest(hooks);

  test('it renders', async function (assert) {
    await render(hbs`<RandomText />`);

    assert.dom('.random-text').exists();
    assert.dom('.random-text h2').exists();

    // TODO
    // assert.dom('.random-text > p').exists({ count: 3 });
  });
});
