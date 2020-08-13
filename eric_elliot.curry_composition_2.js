const flip = fn => a => b => fn(b)(a);

const pipe = (...fns) => x => fns.reduce((y, f) => f(y), x);

const trace = value => label => {
  console.log(`${label}: ${value}`);
  return value;
};

const flippedTrace = flip(trace);

const g = n => n + 1;
const f = n => n * 2;

const h = pipe(
  g,
  flippedTrace('after g'),
  f,
  flippedTrace('after f'),
);

h(20);

