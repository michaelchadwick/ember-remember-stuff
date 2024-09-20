import Component from '@glimmer/component';
import { tracked } from '@glimmer/tracking';
import { typeOf } from '@ember/utils';
import { htmlSafe } from '@ember/template';
import { action } from '@ember/object';

export default class BoxComponent extends Component {
  @tracked id;
  @tracked textWidth;
  @tracked textHeight;
  @tracked expanded = false;

  MAX_HEIGHT = 200;

  get isEditable() {
    return this.args.isEditable;
  }

  get displayExpandedState() {
    return this.expanded ? 'expanded' : 'collapsed';
  }

  get text() {
    if (!this.args.text) {
      return '';
    }
    if (typeOf(this.args.text) !== 'string') {
      return this.args.text.toString();
    }

    return this.args.text;
  }

  get displayText() {
    return new htmlSafe(this.text);
  }

  get textWidthRounded() {
    return Math.floor(this.textWidth);
  }

  get textHeightRounded() {
    return Math.floor(this.textHeight);
  }

  get displayTextDims() {
    return `${this.textWidthRounded} W x ${this.textHeightRounded} H`;
  }

  get isFaded() {
    if (!this.expanded) {
      return this.textHeightRounded >= this.MAX_HEIGHT;
    } else {
      return false;
    }
  }

  get shortId() {
    return this.id ? `#${this.id.substr(0, 8)}` : '';
  }

  @action
  getTextDims(element) {
    if (element) {
      this.textHeight = element.getBoundingClientRect().height;
      this.textWidth = element.getBoundingClientRect().width;
      this.id = element.parentElement.parentElement.parentElement.id;

      console.log(
        `[LOADED] BoxComponent ${this.shortId}; box-text: ${this.textWidth} W x ${this.textHeight} H`,
      );
    }
  }

  @action
  updateTextDims({ contentRect: { width, height } }) {
    this.textWidth = width;
    this.textHeight = height;
  }

  @action
  expand(event) {
    event.stopPropagation();
    this.expanded = true;
  }

  @action
  collapse(event) {
    event.stopPropagation();
    this.expanded = false;
  }
}
