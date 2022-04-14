const tail = require('../tail');
const assert = require('chai').assert;
const result = tail([1, 2, 3, 4, 5]);

describe('#testing Tail function', () => {
  it('should return 4 for the length of result', () => {
    assert.deepEqual(result.length, 4);
  });
  it('should return index 0 for the index of value 2 when passed tail [1,2,3,4,5]', () => {
    assert.deepEqual(result[0], 2);
  });
});
