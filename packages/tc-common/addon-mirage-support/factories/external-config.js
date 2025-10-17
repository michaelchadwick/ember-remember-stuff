import { Factory } from 'miragejs';

export default Factory.extend({
  id: (i) => i + 1,
  type: 'form',
  appVersion: '1.2.3',
});
