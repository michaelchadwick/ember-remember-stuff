import Component from '@glimmer/component';
import { action } from '@ember/object';
import scrollIntoView from 'scroll-into-view';
import ENV from 'frontend/config/environment';

export default class DetailsGalleryComponent extends Component {
  get audioPath() {
    return ENV.environment == 'production'
      ? ENV.APP.AUDIO_PLAYER_FILE_REMOTE
      : ENV.APP.AUDIO_PLAYER_FILE_LOCAL;
  }

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
