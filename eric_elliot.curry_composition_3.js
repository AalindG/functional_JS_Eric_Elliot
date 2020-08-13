const pipe = (...fns) => x => fns.reduce((y, f) => f(y), x);

const trace = label => value => {
  console.log(`${label}: ${value}`);
  return value;
};

const g = n => n + 1;
const f = n => n * 2;

const h = pipe(
  g,
  trace('after g'),
  f,
  trace('after f'),
);

h(20); // h(x) => f . g ( x )=> f(g(x))
/*
after g: 21
after f: 42
*/
