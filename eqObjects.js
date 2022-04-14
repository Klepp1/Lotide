const eqArrays = require('./eqArrays');

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
module.exports = eqObjects;

