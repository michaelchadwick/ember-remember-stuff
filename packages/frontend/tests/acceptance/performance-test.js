import { visit } from '@ember/test-helpers';
import { module, test } from 'qunit';
import { setupApplicationTest } from 'ember-qunit';
// import page from 'frontend/tests/pages/music';

module('Acceptance | performance', function (hooks) {
  setupApplicationTest(hooks);

  hooks.beforeEach(function () {
    this.set('durationQuick', 1000);
    this.set('durationModerate', 2000);
  });

  test('/about', async function (assert) {
    assert.expect(1);
    let start = performance.now();

    await visit('/about');

    let end = performance.now();
    let duration = end - start;

    assert.ok(duration < this.durationQuick, `Render time was ${duration}ms`);
  });

  test('/messages', async function (assert) {
    assert.expect(1);
    let start = performance.now();

    await visit('/messages');

    let end = performance.now();
    let duration = end - start;

    assert.ok(duration < this.durationQuick, `Render time was ${duration}ms`);
  });

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

    assert.ok(duration < this.durationModerate, `Render time was ${duration}ms`);
  });

  test('/links', async function (assert) {
    assert.expect(1);
    let start = performance.now();

    await visit('/links');

    let end = performance.now();
    let duration = end - start;

    assert.ok(duration < this.durationQuick, `Render time was ${duration}ms`);
  });

  test('/contact', async function (assert) {
    assert.expect(1);
    let start = performance.now();

    await visit('/contact');

    let end = performance.now();
    let duration = end - start;

    assert.ok(duration < this.durationQuick, `Render time was ${duration}ms`);
  });

  test('/debuggery', async function (assert) {
    assert.expect(1);
    let start = performance.now();

    await visit('/debuggery');

    let end = performance.now();
    let duration = end - start;

    assert.ok(duration < this.durationModerate, `Render time was ${duration}ms`);
  });

  test('/upload', async function (assert) {
    assert.expect(1);
    let start = performance.now();

    await visit('/upload');

    let end = performance.now();
    let duration = end - start;

    assert.ok(duration < this.durationQuick, `Render time was ${duration}ms`);
  });
});
