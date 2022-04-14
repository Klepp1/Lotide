const takeUntil = function(arr, callback) {
  const result = [];
  for (let i of arr) {
    if (callback(i)) {
      return result;
    }
    result.push(i);
  }
  return result;
};
module.exports = takeUntil;