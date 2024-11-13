import Model, { attr } from '@ember-data/model';

export default class User extends Model {
  @attr('string')
  firstName;

  @attr('string')
  lastName;

  @attr('string')
  displayName;

  @attr('string')
  email;

  @attr('boolean')
  root;

  get isAdmin() {
    return this.root;
  }

  get fullNameFromDisplayName() {
    return this.displayName ?? this.fullNameFromFirstLastName;
  }

  get fullNameFromFirstLastName() {
    if (!this.firstName || !this.lastName) {
      return '';
    }
    return `${this.firstName} ${this.lastName}`;
  }
}
