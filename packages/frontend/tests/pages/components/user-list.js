import { clickable, collection, create } from 'ember-cli-page-object';
import userNameInfo from 'rs-common/page-objects/components/user-name-info';

const definition = {
  scope: '[data-test-user-list]',
  users: collection('[data-test-user-list-item]', {
    viewUserDetails: clickable('[data-test-user-link]'),
    userNameInfo,
    email: {
      scope: '[data-test-email]',
    },
  }),
};

export default definition;
export const component = create(definition);
