import { module, test } from 'qunit';
import { setupRenderingTest } from 'frontend/tests/helpers';
import { render } from '@ember/test-helpers';
import AudioPlayer from 'rs-common/components/audio-player';

module('Integration | Component | audio-player', function (hooks) {
  setupRenderingTest(hooks);

  hooks.beforeEach(async function () {
    this.filePath = '/assets/audio/audio.mp3';
  });

  test('it renders', async function (assert) {
    await render(<template><AudioPlayer @srcUrl={{this.filePath}} /></template>);

    assert.dom('[data-test-audio-player]').exists();
    assert.dom('audio source').exists();
  });

  test('it sets loop attribute properly', async function (assert) {
    await render(
      <template><AudioPlayer @srcUrl={{this.filePath}} @shouldLoop={{true}} /></template>,
    );

    assert.dom('audio').hasAttribute('loop');
  });
});
