import { module, test } from 'qunit';

import { setupTest } from 'remember-stuff/tests/helpers';

module('Unit | Model | link', function (hooks) {
  setupTest(hooks);

  test('it has the right type', function (assert) {
    let store = this.owner.lookup('service:store');
    let link = store.createRecord('link', {
      id: 'what-a-wonderful-link',
      url: 'https://zombo.com',
      title: 'Zombo.com',
      target: '_blank',
    });

    assert.strictEqual(link.title, 'Zombo.com');
  });
});
