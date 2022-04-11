const eqArrays = require('./eqArrays');

const assertArraysEqual = function(ar, ar2) {
  if (eqArrays(ar, ar2)) {
    console.log(`✔✔✔ Assertion Passed: ${ar} === ${ar2}`);
  } else {
    console.log(`😡😡😡 Assertion Failed: ${ar} !== ${ar2}`);
  }
};
module.exports = assertArraysEqual;