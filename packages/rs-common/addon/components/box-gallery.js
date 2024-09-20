import Component from '@glimmer/component';
import { tracked } from '@glimmer/tracking';
import { action } from '@ember/object';
import { service } from '@ember/service';
import ENV from 'frontend/config/environment';

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
}
