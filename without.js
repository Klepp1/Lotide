const without = function(arr, remove) {
  const newArr = [];
  for (let index of arr) {
    if (index !== remove) {
      newArr.push(index);
    }
  }
  return newArr;
};
module.exports = without;