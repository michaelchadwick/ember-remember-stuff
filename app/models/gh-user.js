import Model, { attr } from '@ember-data/model';

export default class GhUserModel extends Model {
  @attr ghUsername;
  @attr('number') ghPublicRepos;
  @attr('number') ghPublicGists;
  @attr('number') ghFollowers;
  @attr('number') ghFollowing;
}
