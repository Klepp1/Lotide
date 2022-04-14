const flatten = function(arr) {
  const newArr = [];
  for (let index of arr) {
    if (Array.isArray(index)) {
      for (const nestedArr of index) {
        newArr.push(nestedArr);
      }
    } else {
      newArr.push(index);
    }
  }
  console.log(newArr);
};
module.exports = flatten;