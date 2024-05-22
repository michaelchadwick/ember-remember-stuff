import JSONAPIAdapter from '@ember-data/adapter/json-api';

export default class SongAdapter extends JSONAPIAdapter {
  host = 'https://music.nebyoolae.com';
  namespace = 'jsonapi/views';

  pathForType() {
    return 'songs/songs_neb_5?include=field_album_id,field_album_id.field_album_cover,field_artist_id';
  }
}
