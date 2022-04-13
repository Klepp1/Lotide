const assertEqual = require('../assertEqual');
const tail = require('../tail');
const assert = require('chai').assert;
const result = tail([1, 2, 3, 4, 5]);

describe('#testing Tail function', () => {
  it('should return 4 for the length of result', () => {
    assert.deepEqual(result.length, 4);
  });
  it('should return 2 for the index of tail [1,2,3,4,5]', () => {
    assert.deepEqual(result[0], 2);
  });
});
