import { Factory } from 'miragejs';

export default Factory.extend({
  title: (i) => `song ${i}`,
  album: (i) => `album ${i}`,
  artist: (i) => `artist ${i}`,
  fileUrl: (i) => `https://example.com/files/${i}.mp3`,
  detailUrl: (i) => `https://example.com/song/${i}`,
  nid: (i) => i + 1,
});
