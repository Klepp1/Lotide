const assertEqual = function(actual, expected) {
  if (actual === expected) {
    console.log(`✔✔✔ Assertion Passed: ${actual} === ${expected}`);
  } else {
    console.log(`😡😡😡 Assertion Failed: ${actual} !== ${expected}`);
  }
};

const countLetters = function(string) {
  let result = {};
  string = string.replace( /\s/g, '');
  for (const i of string) {
    if (result[i] === string[i]) {
      result[i] = 1;
    } else {
      result[i] += 1;
    }
  }
  return result;
};
console.log(countLetters("Hi my name is kyler"));