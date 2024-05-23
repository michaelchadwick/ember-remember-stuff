import Controller from '@ember/controller';
import { tracked } from '@glimmer/tracking';
import ENV from 'remember-stuff/config/environment';

export default class ApplicationController extends Controller {
  @tracked debugIsExpanded;

  constructor() {
    super(...arguments);
    const lsDebugSetting = localStorage.getItem(ENV.APP.DEBUG_VISIBILITY_KEY);

    this.debugIsExpanded = lsDebugSetting || '';

    console.log('LS debugIsExpanded set to:', this.debugIsExpanded);
  }
}
