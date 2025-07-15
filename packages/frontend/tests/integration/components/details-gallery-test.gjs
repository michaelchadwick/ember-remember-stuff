import { module, test } from 'qunit';
import { setupRenderingTest } from 'frontend/tests/helpers';
import { render } from '@ember/test-helpers';
import DetailsGallery from 'frontend/components/details-gallery';

module('Integration | Component | details-gallery', function (hooks) {
  setupRenderingTest(hooks);

  test('it renders', async function (assert) {
    await render(<template><DetailsGallery /></template>);

    assert.dom('details').hasClass('details-gallery');
  });
});
