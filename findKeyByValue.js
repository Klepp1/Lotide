
const findKeyByValue = function(obj, value) {
  for (const i in obj) {
    if (obj[i] === value) {
      return i;
    }
  }
};

module.exports = findKeyByValue;