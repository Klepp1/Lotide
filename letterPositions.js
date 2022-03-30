// "cat bat" --> {c: [0] a: [1, 5] t: [2, 6] b: [4]}

const letterPositions = function(sentence) {
  const results = {};
  for (let i = 0; i < sentence.length; i++) {
    if (sentence[i] !== " ") {
      if (results[sentence[i]] === undefined) {
      results[sentence[i]] = [];
      }
    // {0: 0 + c}
    results[sentence[i]].push(i)
    }
  }
  return results;
};

console.log(letterPositions("cat bat"));

const assertArraysEqual = function(ar, ar2) {
  if (eqArrays(ar, ar2)) {
    console.log(`✔✔✔ Assertion Passed: ${ar} === ${ar2}`);
  } else {
    console.log(`😡😡😡 Assertion Failed: ${ar} !== ${ar2}`);
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

assertArraysEqual(letterPositions("hello").e, [1]);

