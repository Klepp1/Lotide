const eqArrays = function(array1, array2) {
  if (array1 === array2) return true;
  if (array1.length !== array2.length) return false;
for (let i = 0; i < array1.length; i++) {
  if (array1[i] !== array2[i]) {
    return false;
  } 
}
return true;
};

const assertArraysEqual = function (ar, ar2) {
  if (eqArrays(ar, ar2)) {
    console.log(`✔✔✔ Assertion Passed: ${ar} === ${ar2}`);
  } else {
    console.log(`😡😡😡 Assertion Failed: ${ar} !== ${ar2}`);
  }
};


const without = function(arr, remove) {
  let newArr = [];
  for (let k = 0; k < arr.length; k++) {
    if (arr[k] !== remove[k]) {
      newArr.push(arr[k])
    }
  }
  return newArr;
}

console.log(without([1, 2, 3, 4, 5], [1, 2]));