import { module, skip } from 'qunit';
import { setupRenderingTest } from 'frontend/tests/helpers';
import { render } from '@ember/test-helpers';
import { component } from 'tc-common/page-objects/components/not-found';
import NotFound from 'frontend/components/not-found';

// @todo figure out how to suppress the dashboard route for testing purposes [ST 2021/11/04]
module('Integration | Component | not-found', function (hooks) {
  setupRenderingTest(hooks);

  skip('it displays not found message', async function (assert) {
    await render(<template><NotFound /></template>);
    assert.strictEqual(
      component.text,
      "Rats! I couldn't find that. Please check your page address, and try again. Back to Dashboard",
    );
    assert.ok(component.backToHomeLink.isPresent);
    assert.strictEqual(component.backToHomeLink.text, 'Back to Home');
  });
});
