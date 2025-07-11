import { module, test } from 'qunit';
import { setupRenderingTest } from 'frontend/tests/helpers';
import { render } from '@ember/test-helpers';
import Concurrency from "frontend/components/concurrency";

module('Integration | Component | concurrency', function (hooks) {
  setupRenderingTest(hooks);

  test('it renders', async function (assert) {
    // Set any properties with this.set('myProperty', 'value');
    // Handle any actions with this.set('myAction', function(val) { ... });

    await render(<template><Concurrency /></template>);

    assert
      .dom()
      .hasText(
        'Ember-Concurrency (FE) Task1 Running Instances: 0 Task1 Count: 0 Perform Count Task 1 Local Wait Tasks WaitTask1 (Task) WaitTask2 (ReTask) Remote Wait Tasks WaitTask3 (Task) Perform Task Ready to request WaitTask4 (ReTask) Perform Task Ready to request WaitTask5 (ReTask) Perform Task Cancel Task Ready to request WaitTask6 (ReTask - Self-Cancel) Perform Task Ready to request WaitTask7 (Task - No @action) Perform Task Ready to request',
      );
  });
});
