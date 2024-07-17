import { formatCurrency } from 'frontend/helpers/format-currency';
import { module, test } from 'qunit';

module('Unit | Helper | format currency', function () {
  test('formats 199 with $ as currency sign', function (assert) {
    assert.strictEqual(formatCurrency(199, { sign: '$' }), '$1.99');
  });
});
