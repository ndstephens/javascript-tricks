// Capitalize first word of string

// 'hello world' -> 'Hello world'

function capitalize(str) {
  return `${str[0].toUpperCase()}${str.slice(1)}`
}

const result = capitalize('hello world')
console.log(result) // 'Hello world'

//
//

//* USING ARRAY DESTRUCTURING ON A STRING, AND THE REST PARAM
//? 'first' will be the first letter of the string (destructured from it)
//? '...rest' will put the rest of the letters into an array

const capitalize2 = ([first, ...rest]) =>
  `${first.toUpperCase()}${rest.join('')}`

const result2 = capitalize2('hello world')
console.log(result2) // 'Hello world'
