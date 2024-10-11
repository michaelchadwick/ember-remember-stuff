import Component from '@glimmer/component';
import { service } from '@ember/service';
import { tracked } from '@glimmer/tracking';
import { action } from '@ember/object';
import scrollIntoView from 'scroll-into-view';
import ENV from 'frontend/config/environment';

export default class DetailsGalleryComponent extends Component {
  @service('local-storage') ls;
  @tracked env = ENV.environment;
  @tracked envApp = ENV.APP;
  @tracked isExpanded = false;

  constructor() {
    super(...arguments);
    this.isExpanded = this.args.isExpanded;
  }

  @action
  saveDebugVisibility(element) {
    this.isExpanded = !this.isExpanded;

    this.ls.set('debugExpanded', this.isExpanded);

    scrollIntoView(element.target, {
      align: { top: 0 },
    });
  }
}
