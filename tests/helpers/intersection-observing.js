const intersection = (r1, r2) => {
  const xOverlap = Math.max(0, Math.min(r1.x + r1.w, r2.x + r2.w) - Math.max(r1.x, r2.x));
  const yOverlap = Math.max(0, Math.min(r1.y + r1.h, r2.y + r2.h) - Math.max(r1.y, r2.y));
  const overlapArea = xOverlap * yOverlap;

  return overlapArea;
};

const percentInView = (div) => {
  const rect = div.getBoundingClientRect();

  const dimension = { x: rect.x, y: rect.y, w: rect.width, h: rect.height };
  const viewport = { x: 0, y: 0, w: window.innerWidth, h: window.innerHeight };
  const divsize = dimension.w * dimension.h;
  const overlap = intersection(dimension, viewport);
  const percent = overlap / divsize;

  return percent;
};

export function elementInView(elemId) {
  console.log(
    'elementInView?',
    percentInView(document.getElementById(elemId)),
    percentInView(document.getElementById(elemId)) > 0,
  );
  return percentInView(document.getElementById(elemId)) > 0;
}
