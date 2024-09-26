import { module, test } from 'qunit';
import { setupRenderingTest } from 'frontend/tests/helpers';
import { render, click, waitFor } from '@ember/test-helpers';
import { hbs } from 'ember-cli-htmlbars';
import { component } from 'rs-common/page-objects/components/box';

module('Integration | Component | box', function (hooks) {
  setupRenderingTest(hooks);

  test('it renders empty', async function (assert) {
    await render(hbs`<Box />`);
    assert.strictEqual(component.text, '', 'Box with no block exists, and has no text');
  });

  test('it renders short text in full', async function (assert) {
    this.set('text', 'Hello');
    await render(hbs`<Box @text={{this.text}} />`);

    assert.strictEqual(component.text, this.text);
  });

  test('it fades tall text', async function (assert) {
    const longText = `
      <p>Hello. This is a Box component. This text is coming from the Box component <code>@text</code> argument, and supports HTML.</p>
      <p>It also has a lot of text in it and is probably too tall, so it should be truncated/faded somehow. Here is some more text, and some more text, and some more text, and some more text, and some more text, just in case it needs it to be super duper tall. If that was not enough text, then I will throw in a list.</p>
      <p>Another paragraph to take up height? Don't mind if I put that into the template that gets rendered on the page.</p>
      <p>Another paragraph to take up height? Don't mind if I put that into the template that gets rendered on the page.</p>
      <p>Another paragraph to take up height? Don't mind if I put that into the template that gets rendered on the page.</p>
      <ul>
        <li>One</li>
        <li>Dos</li>
        <li>3</li>
        <li>Quatre</li>
        <li>Funf</li>
        <li>667</li>
        <li>Heaven</li>
        <li>Ate</li>
        <li>Nove</li>
        <li>Binary 3</li>
      </ul>
      <p>Cool list, eh?</p>
    `;
    const fadedClass = 'is-faded';
    const fadedSelector = '.is-faded';
    this.set('text', longText);

    await render(hbs`<Box @text={{this.text}} />`);

    // slight delay to allow for proper loading of component
    await waitFor(fadedSelector);

    assert.dom('.display-text-wrapper', this.element).hasClass(fadedClass);

    await click('[data-test-expand]');

    assert.dom('.display-text-wrapper', this.element).doesNotHaveClass(fadedClass);

    await click('[data-test-collapse]');

    // slight delay to allow for proper loading of component
    await waitFor(fadedSelector);

    assert.dom('.display-text-wrapper', this.element).hasClass(fadedClass);
  });

  test('expand/collapse', async function (assert) {
    const longHtml = `
      <p>Hello. This is a Box component. This text is coming from the Box component <code>@text</code> argument, and supports HTML.</p>
      <p>It also has a lot of text in it and is probably too tall, so it should be truncated/faded somehow. Here is some more text, and some more text, and some more text, and some more text, and some more text, just in case it needs it to be super duper tall. If that was not enough text, then I will throw in a list.</p>
      <p>Another paragraph to take up height? Don't mind if I put that into the template that gets rendered on the page.</p>
      <p>Another paragraph to take up height? Don't mind if I put that into the template that gets rendered on the page.</p>
      <p>Another paragraph to take up height? Don't mind if I put that into the template that gets rendered on the page.</p>
      <ul>
        <li>One</li>
        <li>Dos</li>
        <li>3</li>
        <li>Quatre</li>
        <li>Funf</li>
        <li>667</li>
        <li>Heaven</li>
        <li>Ate</li>
        <li>Nove</li>
        <li>Binary 3</li>
      </ul>
      <p>Cool list, eh?</p>
    `;
    const longText =
      "Hello. This is a Box component. This text is coming from the Box component @text argument, and supports HTML. It also has a lot of text in it and is probably too tall, so it should be truncated/faded somehow. Here is some more text, and some more text, and some more text, and some more text, and some more text, just in case it needs it to be super duper tall. If that was not enough text, then I will throw in a list. Another paragraph to take up height? Don't mind if I put that into the template that gets rendered on the page. Another paragraph to take up height? Don't mind if I put that into the template that gets rendered on the page. Another paragraph to take up height? Don't mind if I put that into the template that gets rendered on the page. One Dos 3 Quatre Funf 667 Heaven Ate Nove Binary 3 Cool list, eh?";
    const fadedClass = 'is-faded';
    const fadedSelector = '.is-faded';
    this.set('text', longHtml);
    await render(hbs`<Box @text={{this.text}} />`);

    // slight delay to allow for proper loading of component
    await waitFor(fadedSelector);

    assert.dom('.display-text-wrapper', this.element).hasClass(fadedClass);
    assert.strictEqual(component.text, longText);
    assert.ok(component.expand.isVisible);
    assert.notOk(component.collapse.isVisible);

    await component.expand.click();

    assert.dom('.display-text-wrapper', this.element).doesNotHaveClass(fadedClass);
    assert.notOk(component.expand.isVisible);
    assert.ok(component.collapse.isVisible);

    await component.collapse.click();

    // slight delay to allow for proper loading of component
    await waitFor(fadedSelector);

    assert.dom('.display-text-wrapper', this.element).hasClass(fadedClass);
    assert.ok(component.expand.isVisible);
    assert.notOk(component.collapse.isVisible);
  });
});
