import { module, test } from 'qunit';
import { setupRenderingTest } from 'frontend/tests/helpers';
import { render, click } from '@ember/test-helpers';
import { hbs } from 'ember-cli-htmlbars';

module('Integration | Component | mover', function (hooks) {
  setupRenderingTest(hooks);

  test('it renders', async function (assert) {
    await render(hbs`<Mover />`);

    assert.dom().hasText('Mover (CMN) Click toggle to start moving!');

    await click('#mover button.header');

    assert.dom('#mover').hasText('Mover (CMN) Click toggle to stop moving!');

    await render(hbs`
      <Mover>
        {{t 'general.helloWorld'}}
      </Mover>
    `);

    assert.dom().hasText('Mover (CMN) Click toggle to start moving! Hello World!');
  });
});
