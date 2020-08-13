// https://github.com/hemanth/functional-programming-jargon

Array.prototype.ap = function (xs) {
  return this.reduce((acc, f) => acc.concat(xs.map(f)), [])
}

Array.prototype.chain = function (f) {
  return this.reduce((acc, it) => acc.concat(f(it)), [])
}

// Usage
Array.of('cat,dog', 'fish,bird').chain((a) => a.split(',')) // ['cat', 'dog', 'fish', 'bird']

// Contrast to map
Array.of('cat,dog', 'fish,bird').map((a) => a.split(',')) // [['cat', 'dog'], ['fish', 'bird']]

const liftA2 = (f) => (a, b) => a.map(f).ap(b) // note it's `ap` and not `map`.

const mult = a => b => a * b

const liftedMult = liftA2(mult) // this function now works on functors like array

console.log(liftedMult([1, 2], [3])) // [3, 6]
console.log(liftA2(a => b => a + b)([1, 2], [3, 4]));