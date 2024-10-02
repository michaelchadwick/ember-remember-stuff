import { module, test, skip } from 'qunit';
import { setupTest } from 'ember-qunit';
import { setupMirage } from 'frontend/tests/test-support/mirage';
import { authenticateSession, invalidateSession } from 'ember-simple-auth/test-support';

module('Integration | Service | Current User', function (hooks) {
  setupTest(hooks);
  setupMirage(hooks);

  hooks.beforeEach(async function () {
    await authenticateSession({
      // this token de-serializes to object with "user_id:100" property/value
      jwt: 'eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9.eyJpYXQiOjE1MTA5Njg4NDEsImV4cCI6MTUxMDk3MjQ3NiwidXNlcl9pZCI6MTAwLCJqdGkiOiI5YzYxZDdjZS1jZjliLTQxZDgtYjQ5YS0zMWFmNWQ4Y2MzY2UifQ.P1QY8zDSi8IAVaJ0YHX_KzYsIfZP_bvBdocZ9V9JUb0',
    });
  });

  test('currentUserId', function (assert) {
    const subject = this.owner.lookup('service:current-user');
    const userId = subject.currentUserId;
    assert.strictEqual(parseInt(userId, 10), 100);
  });

  test('no token - no currentUserId', async function (assert) {
    await invalidateSession();
    const subject = this.owner.lookup('service:current-user');
    const userId = subject.currentUserId;
    assert.strictEqual(userId, null);
  });

  test('no token - no model', async function (assert) {
    await invalidateSession();
    const subject = this.owner.lookup('service:current-user');
    const model = await subject.getModel();
    assert.strictEqual(model, null);
  });

  skip('model', async function (assert) {
    this.server.create('user', { id: 100 });
    const subject = this.owner.lookup('service:current-user');
    const model = await subject.getModel();
    assert.strictEqual(parseInt(model.id, 10), 100);
  });

  skip('model only loaded once', async function (assert) {
    assert.expect(2);
    this.server.create('user', { id: 100 });
    let calledAlready = false;

    this.server.get('api/users/:id', (schema, request) => {
      const id = request.params.id;
      assert.strictEqual(parseInt(id, 10), 100);
      assert.notOk(calledAlready);
      calledAlready = true;
      return schema.users.find(id);
    });
    const subject = this.owner.lookup('service:current-user');
    await subject.getModel();
    await subject.getModel();
    await subject.getModel();
    await subject.getModel();
    await subject.getModel();
  });

  skip('userIsAdmin', async function (assert) {
    this.server.create('user', { id: 100, root: true });
    const subject = this.owner.lookup('service:current-user');
    const isAdmin = await subject.getIsAdmin();
    assert.ok(isAdmin);
  });

  skip('not userIsAdmin', async function (assert) {
    this.server.create('user', { id: 100 });
    const subject = this.owner.lookup('service:current-user');
    const isAdmin = await subject.getIsAdmin();
    assert.notOk(isAdmin);
  });

  skip('userRoleTitles', async function (assert) {
    const roles = this.server.createList('user-role', 2);
    this.server.create('user', { id: 100, roles });

    const subject = this.owner.lookup('service:current-user');
    const titles = await subject.getUserRoleTitles();
    assert.strictEqual(titles.length, 2);
    assert.ok(titles.includes('user role 0'));
    assert.ok(titles.includes('user role 1'));
  });
});
