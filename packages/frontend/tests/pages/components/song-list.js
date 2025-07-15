import { collection, create } from 'ember-cli-page-object';

export default create({
  scope: '[data-test-song-list]',
  songs: collection('[data-test-song-list-item]'),
});
