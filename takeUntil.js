

const takeUntil = function(arr, callback) {
  let result = [];
  for (let i of arr) {
    if (callback(i)) {
      break;
      //let result = arr.slice(0, arr.length)
    }
    result.push(i);
  }
  return result;
};
module.exports = takeUntil;

