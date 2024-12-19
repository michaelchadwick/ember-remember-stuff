import { modifier } from 'ember-modifier';

export default modifier(function getElement(element, [callback]) {
  if (typeof callback === 'function') {
    callback(element); // Pass the element to the provided callback
  } else {
    console.warn('get-element modifier expects a callback as the first positional argument.');
  }
});
