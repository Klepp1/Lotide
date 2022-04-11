const assertEqual = require('../assertEqual');
const tail = require('../tail');

const result = tail([1, 2, 3, 4, 5]);
assertEqual(result.length, 4);
assertEqual(result[0], 2);