const Functor = value => ({
  map: fn => Functor(fn(value)),
  valueOf: () => value,
  toString: () => `Functor(${value})`,
  [Symbol.iterator]: function* () {
    yield value;
  },
  constructor: Functor
});

const fRange = (start,end) => Array.from(
{ length: end - start + 1 },
  // change `Identity` to `start.constructor`
  (x, i) => start.constructor(i + start)
);



const trace =  _value => (console.log(_value), _value);

const range = fRange(Functor(2), 10);
// range.map(x => x.map(trace));


const functor_2 = Functor(10);

// (functor_2.map(x => console.log(x)));
console.log('', Functor(2));
/*
const tap = _message => _value => (console.log(_message, _value), _value);

functor_2.map(tap('val: '));

const currFunc = (...fncs) => data => fncs.reduce((acc, next) => next(acc), data);

const fmap = func => arr => arr.map(func);

fmap(tap('val'))(functor_2);
*/