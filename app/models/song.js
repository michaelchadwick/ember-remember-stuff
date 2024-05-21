import Model, { attr } from '@ember-data/model';

export default class SongModel extends Model {
  @attr title;
  @attr album;
  @attr artist;
  @attr url;

  get fullSongTitle() {
    return `${this.title} on ${this.album} by ${this.artist || ''}`;
  }
}
