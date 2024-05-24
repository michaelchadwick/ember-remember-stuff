import { module, test } from 'qunit';
import { setupIntl } from 'ember-intl/test-support';
import { setupRenderingTest } from 'remember-stuff/tests/helpers';
import { render } from '@ember/test-helpers';
import { hbs } from 'ember-cli-htmlbars';

module('Integration | Component | audio-player', function (hooks) {
  setupRenderingTest(hooks);
  setupIntl(hooks, 'en-us');

  test('it renders', async function (assert) {
    await render(hbs`<AudioPlayer @srcUrl="/assets/audio/audio.mp3" />`);

    assert.dom('[data-test-audio-player]').exists();
    assert.dom('audio source').exists();

    await render(hbs`<AudioPlayer @srcUrl="/assets/audio/audio.mp3" @shouldLoop={{true}}/>`);

    assert.dom('[data-test-audio-player]').exists();
    assert.dom('audio source').exists();
    assert.dom('audio').hasAttribute('loop');
  });
});
