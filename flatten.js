
const flatten = function(arr) {
  let newArr = [];
  for (let f = 0; f < arr.length; f++) {
    if (Array.isArray(arr[f])) {
      for (const d of arr[f]) {
        newArr.push(d);
      }
    } else {
      newArr.push(arr[f]);
    }
  }
  console.log(newArr);
};
module.exports = flatten;