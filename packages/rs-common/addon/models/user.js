import Model, { attr } from '@ember-data/model';

export default class User extends Model {
  @attr('string')
  lastName;

  @attr('string')
  firstName;

  @attr('string')
  displayName;

  @attr('string')
  email;

  @attr('boolean')
  root;
}
