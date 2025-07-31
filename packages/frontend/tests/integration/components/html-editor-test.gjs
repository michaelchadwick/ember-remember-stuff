import { module, test } from 'qunit';
import { setupRenderingTest } from 'frontend/tests/helpers';
import { render } from '@ember/test-helpers';
import HtmlEditor from 'frontend/components/html-editor';

module('Integration | Component | html editor', function (hooks) {
  setupRenderingTest(hooks);

  test('it renders', async function (assert) {
    await render(<template><HtmlEditor /></template>);
    assert.dom(this.element).hasText('');
    // await waitFor('[data-test-load-finished]');

    // assert
    //   .dom(this.element)
    //   .hasText('BoldItalicSubscriptSuperscriptOrdered ListUnordered ListInsert LinkUndoRedo');
    // assert.dom('svg').exists({ count: 9 });
  });
});
