// Iterate over a string

//* CAN USE A 'FOR-OF' LOOP TO ITERATE OVER A STRING

const str = 'hello world'

for (const char of str) {
  console.log(char)
}
// h, e, l, l, o, , w, o, r, l, d

//

// const newStr = str.split('')
const newStr = [...str] //? turn into an array of each letter

//? Using 'entries()' on an array creates an array-of-arrays, each containing the index number and the value (such as [ [0, h], [1, e] ... ])
for (const [index, value] of newStr.entries()) {
  console.log(value, index)
}
// h 0, e 1, l 2, l 3, o 4, 5, w 6, o 7, r 8, l 9, d 10
