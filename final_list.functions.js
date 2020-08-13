// fetches data which is in arr1 but not in arr2
const getUniqueElements = (arr1, arr2, _key) => arr1.filter(elem => !(arr2.find(el => el[_key] === elem[_key])))

// fetches intersection of arr1 and arr2
const getUniqueElements = (arr1, arr2, _key) => arr1.filter(elem => arr2.find(el => el[_key] === elem[_key]));

// curry up multiple functions to run on same input.
// output to one function is the input to the next one
// sequence matters
const currFunc = (...fncs) => data => fncs.reduce((acc, next) => next(acc), data);


/**
 *  return an array with unique values
 * @param {Array} arr - array to be processed
 */
const removeDuplicatesFromArray = (arr) => arr.filter((value, index, self) => self.indexOf(value) === index);

/**
 * 
 * @param {Array} arr - pass the array in upper case
 * @param {ArrayOfObjects} obj
 * @param {String} prop - property in the object to match
 */
const findCommonElementsArrObj = (arr, obj, prop) => obj.filter(elem => arr.includes(elem[prop].toUpperCase()));


const bindParamsFromList = (list, keyParam, valueParam) => list.reduce((acc, next) =>
  ((next[keyParam] && next[valueParam]) ?
    acc.push({ [next[keyParam]]: next[valueParam] }) : ''
    // return acc
  ), []),

