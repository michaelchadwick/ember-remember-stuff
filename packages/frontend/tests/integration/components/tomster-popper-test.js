import { module, test } from 'qunit';
import { setupRenderingTest } from 'frontend/tests/helpers';
import { render } from '@ember/test-helpers';
import { hbs } from 'ember-cli-htmlbars';
// import { elementInView } from '../../helpers/intersection-observing';

module('Integration | Component | tomster-popper', function (hooks) {
  setupRenderingTest(hooks);

  test('it renders', async function (assert) {
    await render(hbs`<TomsterPopper />`);

    assert.dom('#tomster-popper').exists();

    // TODO
    // assert.false(elementInView('tomster-popper'));

    // let tomster = document.querySelector('#tomster-popper');
    // tomster.classList.add('show');

    // assert.true(elementInView('tomster-popper'));

    // tomster.classList.remove('show');
    // tomster.classList.add('hide');

    // assert.false(elementInView('tomster-popper'));
  });
});
