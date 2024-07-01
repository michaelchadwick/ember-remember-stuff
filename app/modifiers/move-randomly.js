import { modifier } from 'ember-modifier';

const { ceil, floor, random, round } = Math;

const randInt = (min, max) => {
  const minCeiled = ceil(min);
  const maxFloored = floor(max);
  return round(random() * (maxFloored - minCeiled + 1) + minCeiled);
};

export default modifier((element) => {
  const id = setInterval(() => {
    const top = randInt(-3, 3);
    const left = randInt(-3, 3);
    element.style.transform = `translate(${left}px, ${top}px)`;
  }, 100);

  return () => clearInterval(id);
});
