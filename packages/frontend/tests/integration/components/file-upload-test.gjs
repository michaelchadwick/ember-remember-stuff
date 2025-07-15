import { module, test } from 'qunit';
import { setupRenderingTest } from 'frontend/tests/helpers';
import { render } from '@ember/test-helpers';
import FileUpload from "frontend/components/file-upload";

module('Integration | Component | file-upload', function (hooks) {
  setupRenderingTest(hooks);

  test('it renders', async function (assert) {
    await render(<template><FileUpload /></template>);

    assert.dom().hasText('Upload your file (.jpg, .jpeg, .png, .txt):');
  });
});
