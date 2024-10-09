import { tracked } from '@glimmer/tracking';
import { Resource } from 'ember-could-get-used-to-this';

export default class GetErrorsFor extends Resource {
  @tracked data = [];

  get value() {
    return this.data;
  }

  async setup() {
    const caller = this.args.positional[0];
    const prop = this.args.positional[1];

    console.log('caller', caller);
    console.log('prop', prop);

    this.data = await caller.getErrorsFor(prop);
  }
}
