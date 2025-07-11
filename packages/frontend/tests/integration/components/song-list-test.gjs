import { module, test } from 'qunit';
import { setupRenderingTest } from 'frontend/tests/helpers';
import { render } from '@ember/test-helpers';
import SongList from "frontend/components/song-list/index";

module('Integration | Component | song-list', function (hooks) {
  setupRenderingTest(hooks);

  test('it renders', async function (assert) {
    const songs = await this.owner.lookup('service:store').findAll('song');

    this.set('songs', songs);

    await render(<template><SongList @songs={{this.songs}} /></template>);

    assert.dom('.song-list').exists();
    assert.dom('.song-list li').exists();
  });
});
