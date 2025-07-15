import { module, test } from 'qunit';
import { setupRenderingTest } from 'frontend/tests/helpers';
import { render } from '@ember/test-helpers';
// import { elementInView } from '../../helpers/intersection-observing';
import TomsterPopper from 'frontend/components/tomster-popper';

module('Integration | Component | tomster-popper', function (hooks) {
  setupRenderingTest(hooks);

  test('it renders', async function (assert) {
    await render(<template><TomsterPopper /></template>);

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
