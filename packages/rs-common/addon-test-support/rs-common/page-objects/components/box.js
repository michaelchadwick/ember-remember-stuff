import { create } from 'ember-cli-page-object';

const definition = {
  scope: '[data-test-box]',
  expand: {
    scope: '[data-test-expand]',
  },
  collapse: {
    scope: '[data-test-collapse]',
  },
};

export default definition;
export const component = create(definition);
