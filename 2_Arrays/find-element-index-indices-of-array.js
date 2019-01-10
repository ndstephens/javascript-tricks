// Find certain element / index of array

//*--------------------------------------------------/
//*     array.FIND() -- returns first Element
//*--------------------------------------------------/
//? returns the FIRST **ELEMENT** that satisfies the condition

const people = ['John', 'Mary', 'Joe', 'John']

let result = people.find(person => person === 'John')
console.log(result) // 'John'

//
//*--------------------------------------------------/
//*     array.findINDEX() -- returns first Index
//*--------------------------------------------------/
//? similar function as 'find' but...
//? returns the FIRST **INDEX** that satisfies the condition

result = people.findIndex(person => person === 'John')
console.log(result) // 0

//
//*--------------------------------------------------/
//*     array.findIndexALL() -- returns ALL Index
//*     ** FUNCTION WE CREATED **
//*--------------------------------------------------/
//? function for finding **ALL INDEXES** THAT MATCH

function findIndexAll(arr, value) {
  const indices = []
  //* if the current element in the array matches the value we're looking for then push its index number into the 'indices' array
  arr.forEach((el, i) => {
    if (el === value) indices.push(i)
  })
  // arr.forEach((el, i) => el === value && indices.push(i)) // more clever
  return indices
}

const res = findIndexAll(people, 'John')
console.log(res) // [ 0, 3 ]
