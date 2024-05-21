import JSONAPIAdapter from '@ember-data/adapter/json-api';

export default class SongAdapter extends JSONAPIAdapter {
  host = 'https://music.nebyoolae.com';
  // host =
  //   'https://music.nebyoolae.com/jsonapi/views/songs/songs_neb_5?include=field_album_id,field_album_id.field_album_cover,field_artist_id';
  namespace = 'jsonapi/views';

  pathForType() {
    return 'songs/songs_neb_5?include=field_album_id,field_album_id.field_album_cover,field_artist_id';
  }

  // buildURL() {
  //   return `${super.buildURL(...args)}`;
  // }
}
