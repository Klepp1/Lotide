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

const flatten = function(arr) {
  let newArr = [];
  for (let f = 0; f < arr.length; f++) {
    if (Array.isArray(arr[f])) {
      for (const d of arr[f]) {
        newArr.push(d);
      }
    } else {
      newArr.push(arr[f])
    }
  }
  console.log(newArr);
};

flatten([1, 2, 3, [4, 5], 6]);