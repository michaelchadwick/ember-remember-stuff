import { helper } from '@ember/component/helper';

export function substring(positional, { start, end }) {
  return positional[0].substring(start || 0, end);
}

export default helper(substring);
