import { helper } from '@ember/component/helper';

export default helper(function split(positional, { delimiter, index }) {
  const string = positional[0];

  if (string == undefined) {
    return string;
  }

  return string.split(delimiter || '')[index || 0];
});
