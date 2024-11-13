import { create, text } from 'ember-cli-page-object';

const definition = {
  scope: '[data-test-user-name-info]',
  fullName: text('[data-test-display-name]'),
};

export default definition;
export const component = create(definition);
