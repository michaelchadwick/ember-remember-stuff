import Controller from '@ember/controller';
import { tracked } from '@glimmer/tracking';

export default class ApplicationController extends Controller {
  @tracked debugIsExpanded;

  constructor() {
    super(...arguments);
    const lsDebugSetting = localStorage.getItem('remember-stuff-debug-expanded');

    this.debugIsExpanded = lsDebugSetting || '';

    console.log('LS debugIsExpanded set to:', this.debugIsExpanded);
  }
}
