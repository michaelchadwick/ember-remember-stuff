import Component from '@glimmer/component';
import { service } from '@ember/service';
import { tracked } from '@glimmer/tracking';
import { action } from '@ember/object';
import ENV from 'frontend/config/environment';

export default class DebugComponent extends Component {
  @tracked env = ENV.environment;
  @tracked envApp = ENV.APP;
  @tracked isExpanded = this.args.isExpanded;

  @service('local-storage') ls;

  @action
  saveDebugVisibility() {
    this.isExpanded = !this.isExpanded;

    this.ls.set('debugExpanded', this.isExpanded);
  }
}
