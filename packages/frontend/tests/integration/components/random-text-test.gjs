import { module, test } from 'qunit';
import { setupRenderingTest } from 'frontend/tests/helpers';
import { render } from '@ember/test-helpers';
import RandomText from "rs-common/components/random-text";

module('Integration | Component | random-text', function (hooks) {
  setupRenderingTest(hooks);

  test('it renders', async function (assert) {
    await render(<template><RandomText /></template>);

    assert.dom('.random-text').exists();
    assert.dom('.random-text h3').exists();

    // TODO
    // assert.dom('.random-text > p').exists({ count: 3 });
  });
});
