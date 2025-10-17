import Route from '@ember/routing/route';
// import { loadQuillEditor } from 'tc-common/utils/load-quill-editor';

export default class ContactRoute extends Route {
  model() {
    return null;
  }

  async afterModel() {
    // pre load quill so it's available quickly
    // loadQuillEditor();
  }
}
