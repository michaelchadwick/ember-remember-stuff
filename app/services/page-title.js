import EmberPageTitleService from 'ember-page-title/services/page-title';
import { tracked } from '@glimmer/tracking';

export default class HeaderTitleService extends EmberPageTitleService {
  @tracked title = '';

  titleDidUpdate(title) {
    this.title = title;
  }
}
