import Component from '@glimmer/component';
import { service } from '@ember/service';
import { tracked } from '@glimmer/tracking';
import { action } from '@ember/object';
import ENV from 'remember-stuff/config/environment';

export default class DebugComponent extends Component {
  @tracked env = ENV.environment;
  @tracked app = ENV.APP;
  @tracked isExpanded = this.args.isExpanded;

  @service localStorage;

  @action
  saveDebugVisibility() {
    this.isExpanded = !this.isExpanded;

    this.localStorage.set('debugExpanded', this.isExpanded);
  }
}
