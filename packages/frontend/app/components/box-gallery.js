import Component from '@glimmer/component';
import { tracked } from '@glimmer/tracking';
import { action } from '@ember/object';
import { service } from '@ember/service';

export default class BoxGallery extends Component {
  @service intl;
  @service loremIpsum;

  @tracked boxes = [
    {
      block: null,
      text: `
        <p>Hello. This is a Box component. This text is coming from the Box component <code>@text</code> argument, and supports HTML.</p>
        <p>It also has a lot of text in it and is probably too tall, so it should be truncated/faded somehow. Here is some more text, and some more text, and some more text, and some more text, and some more text, just in case it needs it to be super duper tall. If that was not enough text, then I will throw in a list.</p>
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
      `,
    },
    {
      block: `
        <p>Hey! This is a Box component. This text is coming from a block passed into the Box componenet. It <b>does not</b> support <code>HTML</code>.</p>
      `,
      text: null,
    },
  ];
  @tracked isGenerating = false;

  @action
  async generateNewBox() {
    this.isGenerating = true;
    const text = await this.loremIpsum.requestText(2, 2);
    const newBox = {
      text: text,
    };

    if (newBox) {
      this.boxes = [newBox, ...this.boxes];
    }

    this.isGenerating = false;
  }
}
