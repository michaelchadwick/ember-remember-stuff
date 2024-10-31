import { Factory } from 'miragejs';

export default Factory.extend({
  id: (i) => i + 1,
  firstName: (i) => `${i} guy`,
  lastName: (i) => `Mc${i}son`,
  displayName: (i) => `${i} guy Mc${i}son`,
  email: 'user@example.edu',
  root: false,
});
