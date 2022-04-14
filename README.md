# Lotide

A mini clone of the [Lodash](https://lodash.com) library.

## Purpose

**_BEWARE:_ This library was published for learning purposes. It is _not_ intended for use in production-grade software.**

This project was created and published by me as part of my learnings at Lighthouse Labs. 

## Usage

**Install it:**

`npm install @kylerlepp/lotide`

**Require it:**

`const _ = require('@kylerlepp/lotide');`

**Call it:**

`const results = _.tail([1, 2, 3]) // => [2, 3]`

## Documentation

The following functions are currently implemented:

* `assertEqual`: This function will compare two values and return if they are equal or not.
* `head`: This function will return the first element of an array.
* `tail`: This function will return the tail of an array(every element after the first).
* `middle`: This function returns the middle most value of a given array if the array is even it will return the two middle most values.
* `assertArraysEqual`: This function will check if two arrays are equal or not and return true or false.
* `assertObjectsEqual`: This function will check if two objects are equal and will return true or false.
* `countLetters`: This function will count the amount of letters in a given string and return the value.
* `countOnly`: This function will return the amount of times a value is found in an array.
* `eqArrays`: This function is the basis of assertArraysEqual it checks if two arrays are equal.
* `eqObjects`: This function is the basis of assertObjectsEqual it checks if two objects are equal.
* `findKey`: This function takes in two arguments the object and the callback and returns the key that you are trying to return in the callback.
* `findKeyByValue`: This function will the find the key in an object with the key value as its second argument.
* `flatten`: This function will take in nested arrays and flatten them into a regular array.
* `letterPositions`: This function will take in a string and give the indexs of each letter.
* `map`: This function will take in an array and a callback it will change each element of the array based on the callback and return it in a new array.
* `takeUntil`: This function will take in an array and a callback, it will push each item in the array into a new array until the condition inside the callback is met.
* `without`: This function takes in an array and a value of what you dont want in the array, it will push everything into a new array except for the value you dont want.
* `Index`: this file contains all above functions, Require it too obtain all.