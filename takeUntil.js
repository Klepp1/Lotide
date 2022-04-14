const takeUntil = function(arr, callback) {
  let result = [];
  for (let i of arr) {
    if (callback(i)) {
      return result;
    }
    result.push(i);
  }
  return result;
};
module.exports = takeUntil;