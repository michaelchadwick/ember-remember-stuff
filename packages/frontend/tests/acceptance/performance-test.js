import { visit } from '@ember/test-helpers';
import { module, test } from 'qunit';
import { setupApplicationTest } from 'ember-qunit';
// import page from 'frontend/tests/pages/music';

module('Acceptance | performance', function (hooks) {
  setupApplicationTest(hooks);

  test('/music', async function (assert) {
    assert.expect(1);
    let start = performance.now();

    await visit('/music');
    // await waitUntil(
    //   () => {
    //     return page.songs.length > 0;
    //   },
    //   {
    //     timeout: 5000, // optional: fail faster if needed
    //     timeoutMessage: 'Expected async content did not load',
    //   },
    // );
    // await settled();

    let end = performance.now();
    let duration = end - start;

    assert.ok(duration < 1000, `Render time was ${duration}ms`);
  });
});
