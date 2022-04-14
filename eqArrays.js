const eqArrays = function(array1, array2) {
  if (array1 === array2) return true;
  if (array1.length !== array2.length) return false;
  for (let index of array1) {
    if (array1[index] !== array2[index]) {
      return false;
    }
  }
  return true;
};
module.exports = eqArrays;