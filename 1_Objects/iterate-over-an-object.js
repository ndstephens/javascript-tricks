// Iterating over an object

const username = {
  first: 'John',
  last: 'Doe',
}

//
//*--------------------------------------------------/
//*     FOR-IN
//*--------------------------------------------------/
//? the problem with 'for-in' loops is they iterate over all properties in an object, including those on the prototype

//? therefore must use 'hasOwnProperty' to only iterate over props we have defined, not those in the prototype

// eslint-disable-next-line no-restricted-syntax
for (const u in username) {
  if (username.hasOwnProperty(u)) {
    console.log(u, username[u])
  }
}

//
//*--------------------------------------------------/
//*     FOR-OF
//*--------------------------------------------------/
//? using 'Object.keys(obj)' returns an array of the keys, that can be iterated over

for (const u of Object.keys(username)) {
  console.log(u, username[u]) // first John, last Doe
}

//
//*--------------------------------------------------/
//*     OBJECT.ENTRIES(obj) and FOREACH
//*--------------------------------------------------/
//? Object.entries(obj) returns an array-of-arrays, consisting of the keys and values

console.log(Object.entries(username))
// [ [ 'first', 'John' ], [ 'last', 'Doe' ] ]

Object.entries(username).forEach(entry => console.log(entry[0], entry[1]))
// first John
// last Doe

//* that works, but using Array Destructuring is cleaner and more readable

Object.entries(username).forEach(([key, value]) => console.log(key, value))
// first John
// last Doe
