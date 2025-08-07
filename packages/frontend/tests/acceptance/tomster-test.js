import { module, test } from 'qunit';
import { visit } from '@ember/test-helpers';
import { setupApplicationTest } from 'frontend/tests/helpers';
import { keyDown } from 'ember-keyboard/test-support/test-helpers';
// import { elementInView } from '../helpers/intersection-observing';

module('Acceptance | tomster', function (hooks) {
  setupApplicationTest(hooks);

  test('see if tomster works', async function (assert) {
    await visit('/');

    // assert.notOk(elementInView('tomster-popper'), 'tomster is not intersecting viewport');
    assert.dom('#tomster-popper').isNotVisible('tomster is not visible');

    await keyDown('KeyT+ctrl+shift', document.getElementById('base-wrapper'));

    assert.dom('#tomster-popper').isVisible('tomster is visible');

    await keyDown('KeyT+ctrl+shift', document.getElementById('base-wrapper'));

    // hack to make sure tomster is "gone" before checking visibility
    const done = assert.async();
    setTimeout(() => {
      assert.dom('#tomster-popper').isNotVisible('tomster is not visible');
      done();
    }, 500);
  });
});
