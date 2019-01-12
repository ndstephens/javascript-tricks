// Changing length of decimals

// 1.234 -> 1.2

//? Number of digits after the decimal
//? Will add '0's if necessary
//? Also rounds final displayed number
//? Returns a String, NOT a Number
console.log((1.254).toFixed(1)) // "1.3" not "1.2"
console.log((1.25).toFixed(4)) // "1.2500"

//? Number of digits starting from left-most non-zero digit
//? Also rounds final displayed number
//? Returns a String, NOT a Number
console.log((12.234).toPrecision(3)) // "12.2"
console.log((100.52234).toPrecision(3)) // "101" not "100"
console.log((0.0012254).toPrecision(3)) // "0.00123"

//* CONVERT BACK TO A NUMBER FROM A STRING
Number((12.234).toPrecision(3)) // 12.2
