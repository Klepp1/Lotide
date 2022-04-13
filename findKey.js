const findKey = function(obj, callback) {
  for (const i in obj) {
    if (callback(obj[i])) {
      return i;
    }
  }
  return undefined;
};

module.exports = findKey;