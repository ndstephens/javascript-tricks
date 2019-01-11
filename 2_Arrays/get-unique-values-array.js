// Get only unique values in array

const usernames = ['Jeff', 'Doug', 'John', 'John']

//*--------------------------------------------------/
//*     FILTER method
//*--------------------------------------------------/
//? 'indexOf' will return the first result of finding the given value
//? therefore, the first time 'John' exists in the array its at index 2, so searching for 'John' using 'indexOf' will ALWAYS result in '2'
//? when the 'filter' method runs on the second instance of 'John' it's index is 3, which won't match the result of '2' that 'indexOf' finds (from the first instance of 'John')

const newUsernames = usernames.filter((name, index, array) =>
  array.indexOf(name) === index ? name : '',
)
console.log(newUsernames) // [ 'Jeff', 'Doug', 'John' ]

//
//*--------------------------------------------------/
//*     SET (simpler approach)
//*--------------------------------------------------/
//? create a new Set from the 'usernames' array
//? the Set will only contain unique values from that array
//? transform it back into an array using the Spread Operator inside of an array literal

const set = [...new Set(usernames)]
console.log(set) // [ 'Jeff', 'Doug', 'John' ]
