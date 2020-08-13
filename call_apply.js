function Product(name, type) {
  this._name = name;
  this._type = type;
}

function Food(name, price) {
  Product.apply(this, [name, 'Food']);
  this._price = price;
}


console.log((new Food('Veggie', 1300)));

const curr = (...fncs) => data => fncs.reduce((x, f) => f.call(this, x), data);

const add4ToAll = arr => arr.map(el => el + 4);


const multAll = arr => arr.reduce((a, c) => a * c, 1);


console.log(curr(add4ToAll, add4ToAll, add4ToAll, add4ToAll, multAll)([1, 2, 3, 4, 5]));