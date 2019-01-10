// Fill an array (with a given value)

//*--------------------------------------------------/
//*     array.FILL()
//*--------------------------------------------------/
//? can replace / overwrite a range of items in an array
//? first argument is the string used for replacement
//? second argument is starting index
//? third argument is number of items to replace

//? For example, we want to 'hide' the first three numbers in a phone number

const phoneNumber = '555-525-5252'
// const newNumber = phoneNumber.split('').filter(num => num !== '-')
const newNumber = phoneNumber.split('')
//* 'fill' the first three items of the array with a '*'
console.log(newNumber.fill('*', 0, 3).join(''))
