import JSONAPISerializer from '@ember-data/serializer/json-api';
import ENV from 'remember-stuff/config/environment';

export default class SongSerializer extends JSONAPISerializer {
  normalize(type, payload) {
    const remoteDetailUrl = `${ENV.APP.MUSIC_API_ROOT}${payload.path.alias}`;
    const remoteFileUrl = `${ENV.APP.MUSIC_API_ROOT}/${payload.field_local_link.uri.split('internal:/')[1]}`;

    return {
      data: {
        id: String(payload.drupal_internal__nid),
        type: type.modelName,
        attributes: {
          title: payload.title,
          detailUrl: remoteDetailUrl,
          fileUrl: remoteFileUrl,
          artist: payload.field_artist_id.name,
          album: payload.field_album_id.name,
          nid: String(payload.drupal_internal__nid),
        },
      },
    };
  }
}
