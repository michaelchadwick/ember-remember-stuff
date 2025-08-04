import Component from '@glimmer/component';
import { service } from '@ember/service';
import { cached, tracked } from '@glimmer/tracking';
import { action } from '@ember/object';
import { guidFor } from '@ember/object/internals';
import { modifier } from 'ember-modifier';
import { on } from '@ember/modifier';
import t from 'ember-intl/helpers/t';
import pick from 'rs-common/helpers/pick';
import set from 'ember-set-helper/helpers/set';
import { TrackedAsyncData } from 'ember-async-data';
import { loadQuillEditor } from 'rs-common/utils/load-quill-editor';

export default class HtmlEditorComponent extends Component {
  @service intl;
  @tracked editorId = null;
  @tracked loadFinished = false;
  @tracked popupUrlValue;
  @tracked popupTextValue;
  @tracked popupLinkNewTarget;

  editor = null;

  editorInserted = modifier((element, [options]) => {
    if (!this.editor) {
      const { QuillEditor } = this.loadQuillData.value;
      this.editor = new QuillEditor(element, options);
      if (this.args.autofocus) {
        this.editor.focus();
      }
      this.loadFinished = true;

      this.editor.on('text-change', () => {
        if (!this.isDestroyed && !this.isDestroying) {
          this.args.update(this.editor.getText());
        }
      });
    }

    return true;
  });

  constructor() {
    super(...arguments);
    this.editorId = guidFor(this);
  }

  @cached
  get loadQuillData() {
    return new TrackedAsyncData(loadQuillEditor());
  }

  get options() {
    return {
      debug: 'warn',
      modules: {
        toolbar: {
          container: this.toolbarId,
          handlers: {
            undo: () => this.editor.history.undo(),
            redo: () => this.editor.history.redo(),
            link: () => {
              this.togglePopup();
            },
          },
        },
        history: true,
      },
      theme: 'snow',
      placeholder: 'Message',
    };
  }

  get popupId() {
    return `${this.editorId}-popup`;
  }
  get popupUrlId() {
    return `${this.editorId}-popup-link-url`;
  }
  get popupTextId() {
    return `${this.editorId}-popup-link-text`;
  }
  get popupLinkNewTargetId() {
    return `${this.editorId}-popup-new-target`;
  }
  get toolbarId() {
    return `#${this.editorId}-toolbar`;
  }

  get toolbarLinkPosition() {
    return document.querySelector(`#${this.editorId}-toolbar .ql-link`).offsetLeft;
  }

  @action
  addLink() {
    const quill = this.editor;
    const range = quill.getSelection(true);

    if (this.popupUrlValue && this.popupTextValue) {
      // no text yet, add text and link around it
      if (!range.length) {
        quill.insertText(range.index, this.popupTextValue, 'user');
      }

      quill.setSelection(range.index, this.popupTextValue.length);
      quill.theme.tooltip.edit('link', this.popupUrlValue);
      quill.theme.tooltip.save();
      this.editor.setSelection(range.index + this.popupTextValue.length);

      this.popupUrlValue = '';
      this.popupTextValue = '';

      this.togglePopup();
    }
  }

  @action
  togglePopup() {
    const editor = document.querySelector(`#${this.editorId}`);
    const popup = document.querySelector(`#${this.popupId}`);
    popup.classList.toggle('ql-active');

    if (popup.classList.contains('ql-active')) {
      popup.style.left = `${this.toolbarLinkPosition}px`;
      popup.style.top = `${editor.offsetTop - 8}px`;

      const quill = this.editor;
      const range = quill.getSelection(true);

      if (range.length) {
        this.popupTextValue = quill.getText(range.index, range.length);
      }

      popup.querySelector('input').focus();
    }
  }

  willDestroy() {
    super.willDestroy(...arguments);
    if (this.editor) {
      // this.editor.destroy();
      this.editor = null;
    }
  }
  <template>
    {{#if this.loadQuillData.isResolved}}
      <div id="{{this.editorId}}-toolbar">
        <div class="button-group">
          <button
            type="button"
            class="ql-bold"
            title={{t "components.htmlEditor.titles.bold"}}
            aria-label={{t "components.htmlEditor.labels.bold"}}
          ></button>
          <button
            type="button"
            class="ql-italic"
            title={{t "components.htmlEditor.titles.italic"}}
            aria-label={{t "components.htmlEditor.labels.italic"}}
          ></button>
          <button
            type="button"
            class="ql-script"
            value="sub"
            title={{t "components.htmlEditor.titles.subscript"}}
            aria-label={{t "components.htmlEditor.labels.subscript"}}
          ></button>
          <button
            type="button"
            class="ql-script"
            value="super"
            title={{t "components.htmlEditor.titles.superscript"}}
            aria-label={{t "components.htmlEditor.labels.superscript"}}
          ></button>
          <button
            type="button"
            class="ql-list"
            value="ordered"
            title={{t "components.htmlEditor.titles.listOrdered"}}
            aria-label={{t "components.htmlEditor.labels.listOrdered"}}
          ></button>
          <button
            type="button"
            class="ql-list"
            value="bullet"
            title={{t "components.htmlEditor.titles.listUnordered"}}
            aria-label={{t "components.htmlEditor.labels.listUnordered"}}
          ></button>
          <button
            type="button"
            class="ql-link"
            title={{t "components.htmlEditor.titles.insertLink"}}
            aria-label={{t "components.htmlEditor.labels.insertLink"}}
          ></button>
        </div>
        <div class="button-group">
          <button
            type="button"
            class="ql-undo"
            title={{t "components.htmlEditor.titles.undo"}}
            aria-label={{t "components.htmlEditor.labels.undo"}}
          ></button>
          <button
            type="button"
            class="ql-redo"
            title={{t "components.htmlEditor.titles.redo"}}
            aria-label={{t "components.htmlEditor.labels.redo"}}
          ></button>
        </div>
      </div>
      <div
        {{this.editorInserted this.options}}
        id={{this.editorId}}
        class="html-editor"
        data-test-html-editor
        data-test-load-finished={{this.loadFinished}}
      >
      </div>

      <div id={{this.popupId}} class="ql-popup">
        <h4>{{t "components.htmlEditor.titles.insertLink"}}</h4>
        <label for={{this.popupUrlId}}>
          <input
            type="text"
            id={{this.popupUrlId}}
            aria-label={{t "general.url"}}
            placeholder={{t "general.url"}}
            value={{this.popupUrlValue}}
            {{on "input" (pick "target.value" (set this "popupUrlValue"))}}
          />
        </label>
        <br />
        <label for={{this.popupTextId}}>
          <input
            type="text"
            id={{this.popupTextId}}
            aria-label={{t "general.text"}}
            placeholder={{t "general.text"}}
            value={{this.popupTextValue}}
            {{on "input" (pick "target.value" (set this "popupTextValue"))}}
          />
        </label>
        <br />
        <div class="form-group">
          <input type="checkbox" id={{this.popupLinkNewTargetId}} checked disabled />
          <label for={{this.popupLinkNewTargetId}}>
            {{t "general.linkNewTarget"}}
          </label>
        </div>

        <button type="button" {{on "click" this.addLink}}>{{t
            "components.htmlEditor.titles.insert"
          }}</button>
      </div>
    {{/if}}
  </template>
}
