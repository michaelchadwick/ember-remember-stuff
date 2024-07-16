import Modifier from 'ember-modifier';
import { registerDestructor } from '@ember/destroyable';

const { ceil, floor, random, round } = Math;
const DEFAULT_DELAY = 100;

function randInt(min, max) {
  const minCeiled = ceil(min);
  const maxFloored = floor(max);
  return round(random() * (maxFloored - minCeiled + 1) + minCeiled);
}

function cleanup(instance) {
  if (instance.setIntervalId !== null) {
    clearInterval(instance.setIntervalId);
    instance.setIntervalId = null;
  }
}

export default class MoveRandomlySwitchModifier extends Modifier {
  element = null;
  setIntervalId = null;

  constructor(owner, args) {
    super(owner, args);
    registerDestructor(this, cleanup);
  }

  modify(element, _, { delay }) {
    // Save off the element the first time for convenience with #moveElement
    if (!this.element) {
      this.element = element;
    }

    // Reset from any previous state.
    cleanup(this);

    this.setIntervalId = setInterval(this.#moveElement, delay ?? DEFAULT_DELAY);
  }

  #moveElement = () => {
    let top = randInt(-3, 3);
    let left = randInt(-3, 3);
    this.element.style.transform = `translate(${left}px, ${top}px)`;
  };
}
