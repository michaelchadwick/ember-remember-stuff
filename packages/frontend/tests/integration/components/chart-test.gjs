import { module, test } from 'qunit';
import { setupRenderingTest } from 'frontend/tests/helpers';
import { render } from '@ember/test-helpers';
import Chart from 'frontend/components/chart';

module('Integration | Component | chart', function (hooks) {
  setupRenderingTest(hooks);

  test('it renders', async function (assert) {
    this.donutData = [
      {
        label: 'Super Cool',
        data: 100,
        description: 'Lorem Ipsum',
      },
      {
        label: 'Very Cool',
        data: 200,
        description: 'Long text description here.',
      },
    ];

    await render(<template><Chart @name="donut" @data={{this.donutData}} /></template>);

    assert.dom('.simple-chart').exists();
    assert.dom('.simple-chart > svg').exists();
  });
});
