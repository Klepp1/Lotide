const words = ["ground", "control", "to", "major", "tom"];

const map = function(arr, func) {
  const results1 = [];
  for (let item of arr) {
    results1.push(func(item));
  }
  return results1;
};

const results = map(words, word => word[0]);
console.log(results);

const results2 = map(words, word => word.length);
console.log(results2);

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

const assertArraysEqual = function(ar, ar2) {
  if (eqArrays(ar, ar2)) {
    console.log(`✔✔✔ Assertion Passed: ${ar} === ${ar2}`);
  } else {
    console.log(`😡😡😡 Assertion Failed: ${ar} !== ${ar2}`);
  }
};

assertArraysEqual(results, [ 'g', 'c', 't', 'm', 't' ]);
assertArraysEqual(results2, [ 6, 7, 2, 5, 3 ]);
assertArraysEqual(results2, [1,2,3]);