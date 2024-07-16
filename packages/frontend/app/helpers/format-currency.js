import { helper } from '@ember/component/helper';

export function formatCurrency(value, namedArgs) {
  let dollars = Math.floor(value / 100);
  let cents = value % 100;
  let sign = namedArgs.sign === undefined ? '$' : namedArgs.sign;

  if (cents.toString().length === 1) {
    cents = '0' + cents;
  }
  return `${sign}${dollars}.${cents}`;
}

export default helper(formatCurrency);
