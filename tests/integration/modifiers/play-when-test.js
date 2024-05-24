import { module, test } from 'qunit';
import { setupIntl } from 'ember-intl/test-support';
import { setupRenderingTest } from 'ember-qunit';
import { render } from '@ember/test-helpers';
import { hbs } from 'ember-cli-htmlbars';

module('Integration | Modifier | play-when', function (hooks) {
  setupRenderingTest(hooks);
  setupIntl(hooks, 'en-us');

  test('it renders', async function (assert) {
    this.set('isPlaying', false);

    await render(hbs`
      <audio {{play-when this.isPlaying}}>
        <source src={{@srcURL}} />
        <track kind="captions" />
        {{t "errors.audio"}}
      </audio>
    `);

    assert.ok(true);
  });
});
