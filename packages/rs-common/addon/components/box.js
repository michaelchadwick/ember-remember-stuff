import Component from '@glimmer/component';
import { tracked } from '@glimmer/tracking';
import { htmlSafe } from '@ember/template';
import { action } from '@ember/object';

export default class BoxComponent extends Component {
  @tracked id;
  @tracked width;
  @tracked height;
  @tracked text;

  TALL_HEIGHT = 400;

  constructor() {
    super(...arguments);

    if (this.args.text) {
      this.text = new htmlSafe(this.args.text);
    }
  }

  get widthRounded() {
    return Math.floor(this.width);
  }

  get heightRounded() {
    return Math.floor(this.height);
  }

  get dimensionDisplay() {
    return `${this.widthRounded} W x ${this.heightRounded} H`;
  }

  @action
  getElementAttrs(element) {
    if (element) {
      this.height = element.offsetHeight;
      this.width = element.offsetWidth;
      this.id = element.id;

      console.log(`BoxComponent #${this.id} loaded: ${this.width} W x ${this.height} H`);
    }
  }

  @action
  updateElementDims({ contentRect: { width, height }, target }) {
    this.width = width;
    this.height = height;

    if (this.height > this.TALL_HEIGHT) {
      target.classList.add('tall');
    } else {
      target.classList.remove('tall');
    }
  }
}
