import Component from '@glimmer/component';
import { tracked } from '@glimmer/tracking';
import { action } from '@ember/object';
import { service } from '@ember/service';
import ENV from 'frontend/config/environment';
import t from 'ember-intl/helpers/t';
import { on } from '@ember/modifier';
import Box from 'frontend/components/box';
import LoadingSpinner from 'frontend/components/loading-spinner';

export default class BoxGallery extends Component {
  @service intl;
  @service loremIpsum;

  @tracked envApp = ENV.APP;
  @tracked boxes;
  @tracked isGenerating = false;

  constructor() {
    super(...arguments);

    this.boxes = this.args.boxes ?? this.envApp.BOX_GALLERY_DEFAULTS;
  }

  @action
  async generateNewBox() {
    this.isGenerating = true;
    const paragraphCount = Math.floor(Math.random() * 5) + 1;
    const sentenceCount = Math.floor(Math.random() * 3) + 1;
    const text = await this.loremIpsum.requestText(paragraphCount, sentenceCount);
    const newBox = {
      text: text,
    };

    if (newBox) {
      this.boxes = [newBox, ...this.boxes];
    }

    this.isGenerating = false;
  }
  <template>
    <div class="box-gallery" data-test-box-gallery>
      <h3>{{t "components.boxGallery.head"}}</h3>

      <div class="box-generator">
        <button
          type="button"
          id="btn-generate-new"
          {{on "click" this.generateNewBox}}
          disabled={{this.isGenerating}}
          data-test-box-new
        >
          {{t "components.boxGallery.genNewButton"}}
          {{#if this.isGenerating}}
            <LoadingSpinner />
          {{/if}}
        </button>
      </div>

      <div class="boxes" data-test-boxes>
        {{#each this.boxes as |box|}}
          {{#if box.block}}
            <Box>
              {{box.block}}
            </Box>
          {{else}}
            <Box @text={{box.text}} />
          {{/if}}
        {{/each}}
      </div>
    </div>
  </template>
}
