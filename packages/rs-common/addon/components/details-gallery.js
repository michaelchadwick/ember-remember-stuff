import Component from '@glimmer/component';
import { tracked } from '@glimmer/tracking';
import { action } from '@ember/object';
import scrollIntoView from 'scroll-into-view';
import ENV from 'frontend/config/environment';

export default class DetailsGalleryComponent extends Component {
  @tracked env = ENV.environment;
  @tracked envApp = ENV.APP;

  get isExpanded() {
    return this.args.detailsGalleryIsExpanded;
  }

  @action
  saveVisibility(element) {
    this.args.onDetailsGalleryToggle();

    scrollIntoView(element.target, {
      align: { top: 0 },
    });
  }
}
