import Model, { attr } from '@ember-data/model';

export default class SongModel extends Model {
  @attr title;
  @attr album;
  @attr artist;
  @attr fileUrl;
  @attr detailUrl;
  @attr nid;

  get fullSongTitle() {
    return `${this.title} on ${this.album} by ${this.artist || ''}`;
  }
}
