const assertEqual = function(actual, expected) {
  if (actual === expected) {
    console.log('✔✔✔ Assertion Passed: ' + actual + ' === ' + expected);
  } else {
    console.log('😡😡😡 Assertion Failed: ' + actual + ' !== ' + expected);
  }
};

assertEqual('Lighthouse', 'Lighthouse');
assertEqual('Lighthouse', 'lighthouse');
assertEqual(4, 5);