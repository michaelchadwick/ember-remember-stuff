import { module, test } from 'qunit';
import { setupRenderingTest } from 'frontend/tests/helpers';
import { render } from '@ember/test-helpers';
import SongList from 'frontend/components/song-list';

module('Integration | Component | song-list', function (hooks) {
  setupRenderingTest(hooks);

  test('it renders', async function (assert) {
    const songs = [
      {
        title: 'The Jam Bridge',
        album: 'Zoetic',
        artist: 'Nebyoolae',
        detailUrl: 'https://music.nebyoolae.com/song/the-jam-bridge',
        fileUrl: 'https://music.nebyoolae.com/files/audio/12_zoetic/01-The_Jam_Bridge.mp3',
      },
      {
        title: 'Megablues',
        album: 'Zoetic',
        artist: 'Nebyoolae',
        detailUrl: 'https://music.nebyoolae.com/song/megablues',
        fileUrl: 'https://music.nebyoolae.com/files/audio/12_zoetic/03-Megablues.mp3',
      },
    ];

    this.set('songs', songs);

    await render(<template><SongList @songs={{this.songs}} /></template>);

    assert.dom('.song-list').exists();
    assert.dom('.song-list li').exists({ count: 2 });
  });
});
