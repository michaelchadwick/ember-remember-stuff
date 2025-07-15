import { module, test } from 'qunit';
import { setupRenderingTest } from 'frontend/tests/helpers';
import { render, click } from '@ember/test-helpers';
import t from 'ember-intl/helpers/t';
import Mover from 'frontend/components/mover';

module('Integration | Component | mover', function (hooks) {
  setupRenderingTest(hooks);

  test('it renders', async function (assert) {
    await render(<template><Mover /></template>);

    assert.dom().hasText('Mover (CMN) Click toggle to start moving!');

    await click('#mover button.header');

    assert.dom('#mover').hasText('Mover (CMN) Click toggle to stop moving!');

    await render(
      <template>
        <Mover>
          {{t "general.helloWorld"}}
        </Mover>
      </template>,
    );

    assert.dom().hasText('Mover (CMN) Click toggle to start moving! Hello World!');
  });
});
