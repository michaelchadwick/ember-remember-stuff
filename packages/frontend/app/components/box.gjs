import Component from '@glimmer/component';
import { tracked } from '@glimmer/tracking';
import { typeOf } from '@ember/utils';
import { htmlSafe } from '@ember/template';
import { action } from '@ember/object';
import { uniqueId } from '@ember/helper';
import t from 'ember-intl/helpers/t';
import { on } from '@ember/modifier';
import FaIcon from 'frontend/components/fa-icon';
import onResize from 'ember-on-resize-modifier/modifiers/on-resize';

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
  <template>
    {{#if (has-block)}}
      <div
        class="box has-block"
        contenteditable={{this.isEditable}}
        id={{uniqueId}}
        data-test-box
        ...attributes
      >
        {{yield
          this.displayText
          this.expand
          this.collapse
          this.updateTextDims
          this.isFaded
          this.expanded
        }}
      </div>
    {{else}}
      <div class="box no-block" id={{uniqueId}} data-test-box ...attributes>
        <div class="box-text" data-test-box-text>
          <div class="display-text-wrapper{{if this.isFaded ' is-faded'}}">
            <div class="display-text" {{onResize this.updateTextDims}}>
              {{this.displayText}}
            </div>
          </div>
        </div>
        {{#if this.isFaded}}
          <div class="box-text-control">
            <button
              class="expand-buttons"
              aria-label={{t "general.expand"}}
              title={{t "general.expand"}}
              type="button"
              data-test-expand
              {{on "click" this.expand}}
            >
              <FaIcon @icon="angles-down" />
            </button>
          </div>
        {{else}}
          {{#if this.expanded}}
            <button
              class="expand-buttons"
              aria-label={{t "general.collapse"}}
              title={{t "general.collapse"}}
              type="button"
              data-test-collapse
              {{on "click" this.collapse}}
            >
              <FaIcon @icon="angles-up" />
            </button>
          {{/if}}
        {{/if}}
      </div>
    {{/if}}
  </template>
}
