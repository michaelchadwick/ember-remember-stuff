import Model, { attr } from '@ember-data/model';

export default class LinkModel extends Model {
  @attr url;
  @attr title;
  @attr target;
}
