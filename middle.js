const assertEqual = function(actual, expected) {
  if (actual === expected) {
    console.log(`✔✔✔ Assertion Passed: ${actual} === ${expected}`);
  } else {
    console.log(`😡😡😡 Assertion Failed: ${actual} !== ${expected}`);
  }
};

const eqArrays = function(array1, array2) {
  if (array1 === array2) return true;
  if (array1.length !== array2.length) return false;
for (let i = 0; i < array1.length; i++) {
  if (array1[i] !== array2[i]) {
    return false;
  } 
}
return true;
};

let middle = function (array) {
  let newArr = [];
  if (array.length % 2 === 0) {
    newArr.push(Math.floor(array.length / 2));
    newArr.push(Math.floor(array.length / 2 + 1));
  } else {
    newArr.push(Math.floor(array.length / 2 + 1));
  }
 return newArr;
};

console.log(middle([1, 2, 3, 4 , 5, 6]));