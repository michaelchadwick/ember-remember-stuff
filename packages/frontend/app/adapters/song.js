import JSONAPIAdapter from '@ember-data/adapter/json-api';
import ENV from 'remember-stuff/config/environment';

export default class SongAdapter extends JSONAPIAdapter {
  host = ENV.APP.MUSIC_API_ROOT;
  namespace = 'jsonapi/views';
  viewType = 'songs';
  viewId = 'songs_neb_20';
  viewArgs = 'include=field_album_id,field_album_id.field_album_cover,field_artist_id';

  pathForType() {
    return `${this.viewType}/${this.viewId}?${this.viewArgs}`;
  }
}
