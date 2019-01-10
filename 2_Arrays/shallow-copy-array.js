// Shallow copy / clone an array

let fruits
let newFruits

//*--------------------------------------------------/
//*     COPY BY REFERENCE ** USUALLY NOT WANTED **
//*--------------------------------------------------/
//? mutating the copied array also changes the original

fruits = ['apple', 'banana']

newFruits = fruits
newFruits.push('cherry')

//? original array (fruits) IS effected
console.log(fruits) //* ['apple', 'banana', 'cherry']

//
//*--------------------------------------------------/
//* Spread operator -- SHALLOW COPY **BEST METHOD**
//*--------------------------------------------------/
//? returns a shallow copy, not a reference

fruits = ['apple', 'banana']

newFruits = [...fruits, 'cherry']

//? original array (fruits) unaffected
console.log(fruits) // ['apple', 'banana']

//
//*--------------------------------------------------/
//*     .slice() -- SHALLOW COPY
//*--------------------------------------------------/
//? makes a shallow copy, not a reference

fruits = ['apple', 'banana']

newFruits = fruits.slice()
newFruits.push('cherry')

//? original array (fruits) unaffected
console.log(fruits) // ['apple', 'banana']

//
//*--------------------------------------------------/
//*     [].concat(arr) -- SHALLOW COPY
//*--------------------------------------------------/
//? returns a shallow copy, not a reference

fruits = ['apple', 'banana']

newFruits = [].concat(fruits)
newFruits.push('cherry')

//? original array (fruits) unaffected
console.log(fruits) // ['apple', 'banana']

//
//*--------------------------------------------------/
//*     Arr.concat(newItem) -- SHALLOW COPY
//*--------------------------------------------------/

fruits = ['apple', 'banana']

newFruits = fruits.concat('cherry')

//? original array (fruits) unaffected
console.log(fruits) // ['apple', 'banana']
