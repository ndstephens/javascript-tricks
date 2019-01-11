// Remove items from left / right side of array

//**** DOES NOT MUTATE ORIGINAL ARRAY ****

//*--------------------------------------------------/
//*     array.SLICE()
//*--------------------------------------------------/
//? slice() returns a sub-array copy based on the values we give it
//? first param is starting index
//? second param (optional) is ending index (non-inclusive)
//? if second param is not given then rest of array is included

const nums = [23, 987, 45, 89]

//? start of array until end (non-inclusive of final index)
const removeFromLeft = nums.slice(0, -1) //* simpler than writing...
// const removeFromLeft = nums.slice(0, nums.length - 1)
console.log(removeFromLeft) // [23, 987, 45 ]

//? start at index 1 (second value) and go until the end of the array
const removeFromRight = nums.slice(1)
console.log(removeFromRight) // [ 987, 45, 89]

//? original array was never modified or effected (not mutated)
console.log(nums) // [23, 987, 45, 89]

//
//* ------------------------------------------------------------------------- /

//* CREATE A FUNCTION TO RETURN A COPY OF AN ITEM AT 'N-th' POSITION
const getNthItem = (arr, num) => arr.slice(num - 1, num)[0]

const res = getNthItem(nums, 3)
console.log(res) // 45

//? original array still not effected
console.log(nums) // [23, 987, 45, 89]

function offsetArray(arr, offset) {
  return [...arr.slice(offset), ...arr.slice(0, offset)]
}

//
//* ------------------------------------------------------------------------- /

//* CREATE A FUNCTION TO OFFSET AN ARRAY (make it cycle around starting at a given index).  Even works with negative values

const result = offsetArray([1, 2, 3, 4], 2)
//? returns [ [ 3, 4 ], [ 1, 2 ] ] without using the Spread Operator

console.log(result) // [ 3, 4, 1, 2 ]
