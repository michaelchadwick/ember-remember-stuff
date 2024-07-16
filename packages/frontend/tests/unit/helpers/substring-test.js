import { substring } from 'remember-stuff/helpers/substring';
import { module, test } from 'qunit';

module('Unit | Helper | substring', function () {
  test('it gets first letter of string', function (assert) {
    assert.strictEqual(substring('Tomster', { start: 0, end: 1 }), 'T');
  });
});
