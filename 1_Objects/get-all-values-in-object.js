// Get all values in object

const name = {
  first: 'John',
  last: 'Doe',
  age: 40,
}

// const values = Object.keys(name).map(key => name[key]);
// console.log(values);

//? pretty simple, just use Object.values(obj)

const values = Object.values(name)

console.log(values) // [ 'John', 'Doe', 40 ]
