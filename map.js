
const map = function(arr, func) {
  const results1 = [];
  for (let item of arr) {
    results1.push(func(item));
  }
  return results1;
};

module.exports = map;

