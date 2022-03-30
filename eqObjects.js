const assertEqual = function(actual, expected) {
  if (actual === expected) {
    console.log(`✔✔✔ Assertion Passed: ${actual} === ${expected}`);
  } else {
    console.log(`😡😡😡 Assertion Failed: ${actual} !== ${expected}`);
  }
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
      const names = keyArr[i];
      if (object1[names] !== object2[names]) {
        return false;
      }
    }
  }
  return true;
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

const ab = { a: "1", b: "2" };
const ba = { b: "2", a: "1" };
eqObjects(ab, ba);

const abc = { a: "1", b: "2", c: "3" };
eqObjects(ab, abc);

const cd = { c: "1", d: ["2", 3] };
const dc = { d: ["2", 3], c: "1" };
eqObjects(cd, dc); // => true

const cd2 = { c: "1", d: ["2", 3, 4] };
eqObjects(cd, cd2); // => false

assertEqual(eqObjects(cd, dc), true);
assertEqual(eqObjects(cd, cd2), true);

assertEqual(eqObjects(ab, ba), true);
assertEqual(eqObjects(ab, abc), true);