import Component from '@glimmer/component';
import { tracked } from '@glimmer/tracking';
import { service } from '@ember/service';
import { htmlSafe } from '@ember/template';
import { dropTask } from 'ember-concurrency';

export default class RandomTextComponent extends Component {
  @service loremIpsum;
  @tracked text;
  @tracked paragraphs;
  @tracked sentences;

  constructor() {
    super(...arguments);

    this.paragraphs = this.args.paragraphs ?? 3;
    this.sentences = this.args.sentences ?? 3;

    this.requestText.perform();
  }

  requestText = dropTask(async () => {
    const randomText = await this.loremIpsum.requestText(this.paragraphs, this.sentences);
    this.text = new htmlSafe(randomText);
  });
}
