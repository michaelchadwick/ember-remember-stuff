import { create, text } from 'ember-cli-page-object';

const definition = {
  scope: '[data-test-box]',
  text: text('[data-test-box-text]'),
  expand: {
    scope: '[data-test-expand]',
  },
  collapse: {
    scope: '[data-test-collapse]',
  },
};

export default definition;
export const component = create(definition);
