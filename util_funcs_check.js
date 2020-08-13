const flattenObject = (_obj) => {
  if (!(typeof _obj === 'object' && _obj.constructor === Object)) return _obj;
  let tempObj = {};
  Object.keys(_obj).map(elem => {
    if (typeof _obj[elem] === 'object' && _obj[elem].constructor === Object) tempObj = Object.assign(tempObj, flattenObject(_obj[elem]));
    else tempObj[elem] = _obj[elem];
  });
  return tempObj;
};

const flattenObj = (_obj, x = {}) => {
  if (!(typeof _obj === 'object' && _obj.constructor === Object)) return _obj
  for (elem in _obj) {
    if (typeof _obj[elem] === 'object' && _obj[elem].constructor === Object) x = Object.assign(x, flattenObj(_obj[elem], x));
    else x[elem] = _obj[elem]
  }
  return x;
}

// const flattenArray = _arr => {
//   if (!Array.isArray(_arr)) return _arr;
//   let tempArr = [];
//   _arr.map(elem => {
//     if (Array.isArray(elem)) tempArr.push(...flattenArray(elem))
//     else tempArr.push(elem)
//   });
//   return tempArr;
// }

const flattenArray = _arr => {
  if (!Array.isArray(_arr)) return _arr;
  // ['Bool']
  return _arr.reduce((acc, iter) => {
    if (Array.isArray(iter)) return flattenArray(iter)
    else return [...acc, ...iter]
  }, []);
  // console.log(tempArr);
  // return tempArr;
}

const obj = {
  test: {
    test1: 'test_1',
    test2: 'test_2',
    test3: 'test_3',
    test4: {
      t_test_1: 't_test_1',
      t_test_2: {
        test_test_3: 'test_tst_3'
      }
    },
  }
}

console.dir(flattenObject(obj));
console.dir(flattenObj(obj));
// console.dir(flattenArray(['String', ['Number', ['Bool']]]));