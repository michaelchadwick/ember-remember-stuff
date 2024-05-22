import { module, test } from 'qunit';
import { setupRenderingTest } from 'remember-stuff/tests/helpers';
import { render } from '@ember/test-helpers';
import { hbs } from 'ember-cli-htmlbars';

module('Integration | Component | audio-player', function (hooks) {
  setupRenderingTest(hooks);

  test('it renders', async function (assert) {
    await render(hbs`<AudioPlayer @srcUrl="/assets/audio/audio.mp3" />`);

    assert.dom('[data-test-audio-player]').exists();
  });
});
