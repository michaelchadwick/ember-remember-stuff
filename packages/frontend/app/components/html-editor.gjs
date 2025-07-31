import Component from '@glimmer/component';
import { service } from '@ember/service';
import { cached, tracked } from '@glimmer/tracking';
import { guidFor } from '@ember/object/internals';
import { modifier } from 'ember-modifier';
import { TrackedAsyncData } from 'ember-async-data';
import { loadQuillEditor } from 'rs-common/utils/load-quill-editor';

export default class HtmlEditorComponent extends Component {
  @service intl;
  @tracked editorId = null;
  @tracked loadFinished = false;

  editor = null;

  toolbarOptions = {
    container: [
      [
        'bold',
        'italic',
        { script: 'sub' },
        { script: 'super' },
        { list: 'ordered' },
        { list: 'bullet' },
        'link',
      ],
      ['undo', 'redo'],
    ],
    handlers: {
      undo: () => this.editor.history.undo(),
      redo: () => this.editor.history.redo(),
      link: () => {
        const range = this.editor.getSelection(true);

        // no text yet, add text and link around it
        if (!range.length) {
          const text = prompt('Enter link text');
          const url = prompt('Enter URL');
          if (text && url) {
            this.addLink(this.editor, range.index, url, text);
            this.editor.setSelection(range.index + text.length);
          }
        } else {
          // TODO: add link to existing text
          // const url = prompt('Enter URL');
          // if (url) {
          //   this.addLinkToText(this.editor, range.index, url);
          // }
        }
      },
    },
  };

  addLink(quill, index, url, text) {
    quill.insertText(index, text, 'user');
    quill.setSelection(index, text.length);
    quill.theme.tooltip.edit('link', url);
    quill.theme.tooltip.save();
  }
  // addLinkToText(quill, index, url) {}

  constructor() {
    super(...arguments);
    this.editorId = guidFor(this);
  }

  @cached
  get loadQuillData() {
    return new TrackedAsyncData(loadQuillEditor());
  }

  editorInserted = modifier((element, [options]) => {
    if (!this.editor) {
      const { Quill } = this.loadQuillData.value;
      this.editor = new Quill(element, options);
      this.editor.on('text-change', () => {
        if (!this.isDestroyed && !this.isDestroying) {
          this.args.update(this.editor.getText());
        }
      });
    }

    // console.log('this.editor', this.editor);

    return true;
  });

  get options() {
    return {
      debug: 'warn',
      modules: {
        toolbar: this.toolbarOptions,
        history: true,
      },
      theme: 'snow',
      placeholder: 'Message',
    };
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
      <div
        {{this.editorInserted this.options}}
        id={{this.editorId}}
        class="html-editor"
        data-test-html-editor
        data-test-load-finished={{this.loadFinished}}
      >
      </div>
    {{/if}}
  </template>
}
