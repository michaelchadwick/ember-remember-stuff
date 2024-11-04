import Component from '@glimmer/component';
import { action } from '@ember/object';
import { service } from '@ember/service';
import scrollIntoView from 'scroll-into-view';

export default class DetailsGalleryComponent extends Component {
  @service intl;

  get title() {
    return this.args.title ?? this.intl.t('components.detailsGallery.summary');
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
