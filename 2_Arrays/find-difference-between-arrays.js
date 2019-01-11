// Find the difference (non-shared items) between two arrays

const arr1 = ['fred', 'doug', 'amy', 'amy']
const arr2 = ['fred', 'doug', 'joe']

//? first filter out, using SET, all non-unique values from the first array
//? then 'filter' out all values that exist in the first array, but not in the second
//? then perform same actions with the second array

const result = [...new Set(arr1)].filter(el => !arr2.includes(el))
console.log(result) // [ 'amy' ]

const result2 = [...new Set(arr2)].filter(el => !arr1.includes(el))
console.log(result2) // [ 'joe' ]

const final = [...result, ...result2]
console.log(final) // [ 'amy', 'joe' ]
