import Model, { attr } from '@ember-data/model';

export default class ChecklistModel extends Model {
  @attr('string') title;
  @attr('boolean') checked;
  @attr lists;
}
