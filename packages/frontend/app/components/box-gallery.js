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
      text: 'Hello. This is a Box component. This text is coming from the Box component <code>@text</code> argument, and supports HTML. It also has a lot of text in it and is probably too tall, so it should be truncated/faded somehow.',
    },
    {
      block: `
        <p>Hey! This is a Box component. This text is coming from a block passed into the Box componenet. It <b>does not</b> support <code>HTML</code>.
      `,
      text: null,
    },
  ];

  @action
  async generateNewBox() {
    console.log('making a new Box component instance');

    const newBox = {
      block: await this.loremIpsum.requestText(2, 2),
      text: null,
    };

    if (newBox) {
      console.log('newBox created', newBox);
      this.boxes = [...this.boxes, newBox];
    }
  }
}
