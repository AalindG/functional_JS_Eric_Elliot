const sample = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16, 17, 18, 19, 20, 21, 22, 23, 24, 25, 26, 27, 28, 29, 30, 31, 32, 33, 34, 35, 36, 37, 38, 39, 40, 41, 42, 43, 44, 45, 46, 47, 48, 49, 50, 51, 52, 53, 54, 55, 56, 57, 58, 59, 60, 61, 62, 63, 64, 65, 66, 67, 68, 69, 70, 71, 72, 73, 74, 75, 76, 77, 78, 79, 80, 81, 82, 83, 84, 85, 86, 87, 88, 89, 90, 91, 92, 93, 94, 95, 96, 97, 98, 99, 100, 101];


const groupArray = (myArray, chunkSize) => {
  console.time('a');
  const _arr = Array(Math.ceil(myArray.length / chunkSize))
    .fill()
    .map((_, i, a) => myArray.slice(i * chunkSize, i * chunkSize + chunkSize));
  console.timeEnd('a');
  return _arr;
};

// console.log(groupArray(sample, 10));


function chunkArray(myArray, chunk_size) {
  console.time('b')
  var results = [];
  while (myArray.length) {
    results.push(myArray.splice(0, chunk_size));
  }
  console.timeEnd('b')
  return results;
}

function chunkArray_1(myArray, chunk_size) {
  console.time('c')
  var results = [];
  myArray.map(_el => results.push(myArray.splice(0, chunk_size)))
  console.timeEnd('c')
  return results;
}


(groupArray(sample, 10));
(chunkArray_1(sample, 10));
(chunkArray(sample, 10));