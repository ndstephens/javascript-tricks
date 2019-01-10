// Delete items from array

//*--------------------------------------------------/
//*     splice()
//*--------------------------------------------------/
//? 'splice()' MUTATES the array it is called on ('slice()' does not)
//? it returns the item(s) removed

//? first argument is index to start removal (and/or insert new items)
//? second argument is number of items to remove ('1' is the item at the index itself, '0' would remove nothing and is used only to insert items at index given without deleting any current items)
//? remaining arguments are added to array at index given in first argument

const nums = [48, 29, 30]

// nums.splice(0, 1) // returns 48
// console.log(nums) // [ 29, 30 ]

const removedValue = nums.splice(1, 1, 'new item', 'another item', 'third')

console.log(removedValue) // [ 29 ]
console.log(nums) // [ 48, 'new item', 'another item', 'third', 30 ]

//*--------------------------------------------------/

//? TO REMOVE CHARACTERS FROM A STRING, FIRST TURN IT INTO AN ARRAY OF CHARS
const str = 'hello world'.split('')
//? could also use [...'hello world']

str.splice(0, 1) //* remove first index in array 'h'
str.splice(str.length - 1, 1) //* remove last index in array 'd'

//? turn back into a string
console.log(str.join('')) // 'ello worl'

//*--------------------------------------------------/

//? we can use 'filter' to remove items, but it doesn't mutate the original array. So follow 'filter' with 'map' containing a call to 'splice' to remove all filtered items from the original array
const ints = [4, 5, 6]

// const result = ints
//   .filter(el => el > 4)
//   .map(el => {
//     //* remove filtered item from original array
//     ints.splice(ints.indexOf(el), 1)
//     //* return filtered item to 'results' array
//     return el
//   })
// console.log(result) // [ 5, 6 ]
// console.log(ints) // [ 4 ]

//? here it is put into a function to perform the same task
function removeItems(arr, fn) {
  return arr.filter(fn).map(el => {
    arr.splice(arr.indexOf(el), 1)
    return el
  })
}

const res = removeItems(ints, num => num > 5)
console.log(res) // [ 6 ]
console.log(ints) // [ 4, 5 ]
