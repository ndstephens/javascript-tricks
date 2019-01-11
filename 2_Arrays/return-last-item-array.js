// Return last item of array

const arr1 = [5, 6, 7, 8]

//? mutates the original array
arr1.pop() // returns 8
console.log(arr1) // [5, 6, 7]

//
//*---------------------------------------------------------------------------/
//* CREATE A FUNCTION THAT FILTERS AN ARRAY (THROUGH A PROVIDED FUNCTION) AND RETURNS THE LAST ELEMENT OF THE FILTERED ARRAY
const findLast = (arr, fn) => arr.filter(fn).pop()

//? provide 'arr1' array, filter all items that are greater than '4', return the last item
findLast(arr1, el => el > 4) // returns 7

//? supplied array (arr1) has NOT been mutated b/c 'filter' returned a new array and 'pop' removed/returned the last value from that array, not the original
console.log(arr1) // [5, 6, 7]

//
//*---------------------------------------------------------------------------/
//* Use 'map' to create and array of arrays
arr1.map((el, i) => [el, i]) // [ [ 5, 0 ], [ 6, 1 ], [ 7, 2 ]]

//* create a function to filter by
const overFive = num => num > 5

const filteredArray = arr1
  .map((el, i) => [el, i])
  .filter(([el, i]) => overFive(el, i))
  .pop()[1]
//? 'pop' returns the last array [7, 2] and [1] refers to the second item
console.log(filteredArray) // 2

//
//*---------------------------------------------------------------------------/
//* CREATE A FUNCTION THAT FILTERS AN ARRAY (THROUGH A PROVIDED FUNCTION) AND RETURNS THE INDEX OF THE LAST ELEMENT OF THE FILTERED ARRAY

const names = ['jim', 'jeff', 'bob']

const containsJ = name => name.includes('j')

function findLastIndex(arr, fn) {
  return arr
    .map((el, i) => [el, i])
    .filter(([el, i]) => fn(el, i))
    .pop()[1]
}

findLastIndex(names, containsJ)
// 1
