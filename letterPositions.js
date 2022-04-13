// "cat bat" --> {c: [0] a: [1, 5] t: [2, 6] b: [4]}

const letterPositions = function(sentence) {
  const results = {};
  for (let i = 0; i < sentence.length; i++) {
    if (sentence[i] !== " ") {
      if (results[sentence[i]] === undefined) {
        results[sentence[i]] = [];
      }
      // {0: 0 + c}
      results[sentence[i]].push(i);
    }
  }
  return results;
};

module.exports = letterPositions;


