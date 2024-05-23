import Model, { attr } from '@ember-data/model';

export default class GhUserModel extends Model {
  @attr ghUsername;
  @attr('number') ghPublicRepos;
}
