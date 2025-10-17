import { clickable, collection, create } from 'ember-cli-page-object';

const definition = {
  scope: '[data-test-box-gallery]',
  boxes: collection('.box'),
  new: clickable('[data-test-box-new]'),
};

export default definition;
export const component = create(definition);
