
let middle = function(array) {
  let newArr = [];
  if (array.length % 2 === 0) {
    newArr.push(Math.floor(array.length / 2));
    newArr.push(Math.floor(array.length / 2 + 1));
  } else {
    newArr.push(Math.floor(array.length / 2 + 1));
  }
  return newArr;
};
 module.exports = middle;