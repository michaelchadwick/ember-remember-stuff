import { module, test } from 'qunit';
import { setupRenderingTest } from 'frontend/tests/helpers';
import { render } from '@ember/test-helpers';
import component from 'frontend/tests/pages/components/user-menu';
import a11yAudit from 'ember-a11y-testing/test-support/audit';
// import { setupAuthentication } from 'tc-common';
import { setupMirage } from 'frontend/tests/test-support/mirage';
import UserMenu from 'frontend/components/user-menu';

module('Integration | Component | user-menu', function (hooks) {
  setupRenderingTest(hooks);
  setupMirage(hooks);

  // hooks.beforeEach(async function () {
  //   await setupAuthentication();
  // });

  test('it renders and is accessible', async function (assert) {
    await render(<template><UserMenu /></template>);

    await a11yAudit(this.element);
    assert.strictEqual(component.text, 'Anonymous User Anonymous User');

    await a11yAudit(this.element);

    assert.ok(true, 'no a11y errors found!');
  });
});
