// Convert object to array

const person = { name: 'Amy', age: 40 }

const arr = []

//
//*--------------------------------------------------/
//*     OBJECT.KEYS(obj)
//*--------------------------------------------------/
//? creates an array of the keys, use 'forEach' to loop over that array and push the result onto a new array (not pure)

Object.keys(person).forEach(key => arr.push([key, person[key]]))
console.log(arr) // [ [ 'name', 'Amy' ], [ 'age', 40 ] ]

//? or use 'map' to return a new array (pure)
const result = Object.keys(person).map(key => [key, person[key]])
console.log(result) // [ [ 'name', 'Amy' ], [ 'age', 40 ] ]

//
//*--------------------------------------------------/
//*     OBJECT.ENTRIES(obj)
//*--------------------------------------------------/
//? simply returns an array-of-arrays, consisting of each key-value pair

console.log(Object.entries(person)) // [ [ 'name', 'Amy' ], [ 'age', 40 ] ]
