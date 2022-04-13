
const without = function(arr, remove) {
  let newArr = [];
  for (let k = 0; k < arr.length; k++) {
    if (arr[k] !== remove[k]) {
      newArr.push(arr[k]);
    }
  }
  return newArr;
};

module.exports = without;