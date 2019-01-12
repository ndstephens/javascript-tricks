// Check if every array item meets certain criteria

//*--------------------------------------------------/
//*     array.EVERY()
//*--------------------------------------------------/

const nums = [1, 2, 3, 4, 5]

const result = nums.every(number => number > 2)
console.log(result) // false

//
//
const users = [
  { name: 'John', subscribed: true },
  { name: 'Mary', subscribed: '' },
]

const result2 = users.every(user => user.subscribed)
console.log(result2) // false
