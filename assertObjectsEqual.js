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

const eqObjects = function(object1, object2) {
  const keyArr = Object.keys(object1);
  const keyArr2 = Object.keys(object2);
  if (keyArr.length !== keyArr2.length) {
    return false;
  }

  for (const i in object1) {
    if (Array.isArray(object1[i])) {
      if (eqArrays(object1[i], object2[i]) === false) {
        return false;
      }
    } else {
      if (object1[i] !== object2[i]) {
        return false;
      }
    }
  }
  return true;
};

const ab = {a: "1", b: "2"};
const abc = {b: "2", a: "1"};
const a = {a: 3, b: "2"};


const assertObjectsEqual = function(actual, expected) {
  const inspect = require('util').inspect;
  if (eqObjects(actual, expected)) {
    console.log(`✔✔✔ Assertion Passed: ${inspect(actual)} === ${inspect(expected)}`);
  } else {
    console.log(`😡😡😡 Assertion Failed: ${inspect(actual)} !== ${inspect(expected)}`);
  }
};

assertObjectsEqual(ab, abc);