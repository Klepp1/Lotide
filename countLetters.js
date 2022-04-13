
const countLetters = function(string) {
  let result = {};
  string = string.replace(/\s/g, '');
  for (const i of string) {
    if (result[i] === string[i]) {
      result[i] = 1;
    } else {
      result[i] += 1;
    }
  }
  return result;
};
module.exports = countLetters;