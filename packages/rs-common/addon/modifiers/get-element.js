import { modifier } from 'ember-modifier';

export default modifier(function getElement(element, [callback]) {
  if (typeof callback === 'function') {
    callback(element);
  } else {
    throw new Error('get-element modifier expects a callback as the first positional argument');
  }
});
