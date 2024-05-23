import Component from '@glimmer/component';
import { tracked } from '@glimmer/tracking';
import { action } from '@ember/object';
import ENV from 'remember-stuff/config/environment';

export default class DebugComponent extends Component {
  @tracked env = ENV.environment;
  @tracked isExpanded = this.args.debugIsExpanded;

  @action
  bubbleSummaryUpToDetails(event) {
    console.log('clicked on details > summary');

    event.target.parentElement.click();
  }

  @action
  saveDebugVisibility() {
    this.isExpanded = !this.isExpanded;

    console.log('saveDebugVisibility', this.isExpanded);
  }
}
