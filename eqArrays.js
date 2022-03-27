const assertEqual = function(actual, expected) {
  if (actual === expected) {
    console.log(`✔✔✔ Assertion Passed: ${actual} === ${expected}`);
  } else {
    console.log(`😡😡😡 Assertion Failed: ${actual} !== ${expected}`);
  }
};

const eqArrays = function(array1, array2) {
  let x = 0;
  let y = 0;
  for (let i = 0; i < array1.length; i++) {
    x += Math.round(array1[i])
  }
  for (let j = 0; j < array2.length; j++) {
    y += Math.round(array2[j])
  }
  if (x === y) {
    return true;
  } else {
    return false;
  }
};

console.log(eqArrays([1, 2, 4], [1, 2, 4]));

assertEqual(eqArrays([1, 2, 3], [1, 2, 3]), true);