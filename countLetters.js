const countLetters = function(string) {
  const result = {};
  string = string.replace(/\s/g, '');
  for (const letter of string) {
    if (result[letter] === string[letter]) {
      result[letter] = 1;
    } else {
      result[letter] += 1;
    }
  }
  return result;
};
module.exports = countLetters;