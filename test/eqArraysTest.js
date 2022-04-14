const eqArrays = require('../eqArrays');
const assert = require('chai').assert;

describe('testing the eqArrays function', () => {
  it('should return true when given equal arrays [1,2,3] and [1,2,3]', () => {
    assert.deepEqual(eqArrays([1, 2, 3], [1, 2, 3]), true);
  });
  it('should return false when given unequal arrays [1,2,3] and [1,2,2]', () => {
    assert.deepEqual(eqArrays([1, 2, 3], [1, 2, 2]), false);
  });
});

