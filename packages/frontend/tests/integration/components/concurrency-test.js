import { module, test } from 'qunit';
import { setupRenderingTest } from 'frontend/tests/helpers';
import { render } from '@ember/test-helpers';
import { hbs } from 'ember-cli-htmlbars';

module('Integration | Component | concurrency', function (hooks) {
  setupRenderingTest(hooks);

  test('it renders', async function (assert) {
    // Set any properties with this.set('myProperty', 'value');
    // Handle any actions with this.set('myAction', function(val) { ... });

    await render(hbs`<Concurrency />`);

    assert
      .dom()
      .hasText(
        'Ember-Concurrency (FE) Task1 Running Instances: 0 Task1 Count: 0 Perform Count Task 1 Perform Wait Task 1 (Task - Local) Perform Wait Task 2 (Task - Remote) Perform Wait Task 3 (RestartableTask - Local) Perform Wait Task 4 (RestartableTask - Remote) Perform Wait Task 5 (RestartableTask - Remote - With Cancel Button) Cancel Wait Task 5 Perform Wait Task 6 (RestartableTask - Remote - Self-Canceling) Perform Wait Task 7 (Task - Remote - Self-Canceling - No @action)',
      );
  });
});
