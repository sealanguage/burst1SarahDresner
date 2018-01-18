//

const burst = new mojs.Burst({
  radius: { 10 : 200 },
  count: 20,
  children: {
    shape: 'cross',
    stroke: 'teal',
    strokeWidth: { 6: 0 },
    angle: { 360: 0 },
    radius: { 30: 5 },
    duration: 3000
}
});
const burst2 = new mojs.Burst({
  radius: { 10 : 200 },
  count: 20,
  children: {
    shape: 'zigzag',
    stroke: 'pink',
    strokeWidth: { 6: 0 },
    angle: { 360: 0 },
    radius: { 30: 5 },
    duration: 3000
}
});

const timeline = new mojs.Timeline({
  repeat: 999
}).add(burst, burst2).play();

