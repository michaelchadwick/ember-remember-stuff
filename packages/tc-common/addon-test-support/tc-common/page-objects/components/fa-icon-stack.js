import { collection, create } from 'ember-cli-page-object';
import faIcon from 'tc-common/page-objects/components/fa-icon';

const definition = {
  scope: '[data-test-awesome-icon-stack]',
  icons: collection('[data-test-awesome-icon]', faIcon),
};

export default definition;
export const component = create(definition);
