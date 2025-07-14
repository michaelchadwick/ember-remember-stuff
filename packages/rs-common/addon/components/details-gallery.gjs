import Component from '@glimmer/component';
import { action } from '@ember/object';
import { service } from '@ember/service';
import scrollIntoView from 'scroll-into-view';
import { on } from '@ember/modifier';
import t from 'ember-intl/helpers/t';
import Box from 'rs-common/components/box';
import DoubleIt from 'rs-common/components/double-it';
import Mover from 'rs-common/components/mover';
import GhUser from 'frontend/components/gh-user';

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
  <template>
    <h3>{{t "components.detailsGallery.head"}}</h3>

    <details
      class="details-gallery"
      {{on "click" this.saveVisibility}}
      open={{@detailsGalleryExpanded}}
    >
      <summary>{{this.title}}</summary>
      <div class="gallery">
        <GhUser
          @username={{@ghUserData.ghUsername}}
          @htmlUrl={{@ghUserData.ghHtmlUrl}}
          @publicRepos={{@ghUserData.ghPublicRepos}}
          @publicGists={{@ghUserData.ghPublicGists}}
          @followers={{@ghUserData.ghFollowers}}
          @following={{@ghUserData.ghFollowing}}
        />

        <Box
          @text="Hello I'm a <code>Box</code> component in the <code>DetailsGallery</code> component."
        />
        <Box>
          {{t "components.box.defaultBlock1"}}
        </Box>

        <DoubleIt />

        <Mover />
      </div>
    </details>
  </template>
}
