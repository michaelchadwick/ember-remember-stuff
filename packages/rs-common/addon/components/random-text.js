import Component from '@glimmer/component';
import { tracked } from '@glimmer/tracking';
import { service } from '@ember/service';
import { htmlSafe } from '@ember/template';
import { dropTask } from 'ember-concurrency';

export default class RandomTextComponent extends Component {
  @service loremIpsum;
  @tracked text;
  @tracked count;
  @tracked size;

  constructor() {
    super(...arguments);

    this.count = this.args.count ?? 1;
    this.size = this.args.size ?? 'medium';

    this.requestText.perform();
  }

  requestText = dropTask(async () => {
    const randomText = await this.loremIpsum.requestText(this.count, this.size);
    this.text = new htmlSafe(randomText);
  });
}
