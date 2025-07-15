import { create } from 'ember-cli-page-object';
import SongList from 'frontend/components/song-list';

export default create({
  scope: '[data-test-music]',
  songs: SongList,
});
