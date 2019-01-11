// Make a range of numbers as an array

//*--------------------------------------------------/
//*     Array.from()
//*--------------------------------------------------/
//? Usually used to turn array-like objects into actual arrays
//? takes a second argument that is a MAP callback that will operate on every item in the created array

const range = Array.from({ length: 10 }, (value, index) => index + 1)

console.log(range)
// [1, 2, 3, 4, 5, 6, 7, 8, 9, 10]
