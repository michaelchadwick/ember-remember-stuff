import { tracked } from '@glimmer/tracking';
import { Resource } from 'ember-could-get-used-to-this';
export default class HasErrorFor extends Resource {
  @tracked data;

  get value() {
    return Boolean(this.data);
  }

  async setup() {
    const caller = this.args.positional[0];
    const prop = this.args.positional[1];

    this.data = await caller.hasErrorFor(prop);
  }
}
