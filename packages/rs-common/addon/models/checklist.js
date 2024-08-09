import Model, { attr } from '@ember-data/model';

export default class ChecklistModel extends Model {
  @attr('string') title;
  @attr('string') summary;
  @attr('boolean') checked;
  @attr lists;
}
