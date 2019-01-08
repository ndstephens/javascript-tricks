// Delete or filter a property from an object

const name = { first: 'John', middle: 'Bob', last: 'Doe' }

//? simplest way is to use 'delete' keyword
//? HOWEVER, this permanently deletes it from the object
// delete name.last
// console.log(name) // { first: 'John', middle: 'Bob' }

//
//? if we want to filter out a property from an object, and create a new object from the result, this is the better approach...

//? basically turn the object into an array, filter the array, create a new object from the filtered array

function filterObj(obj, prop) {
  const filteredObj = {}
  Object.keys(obj)
    .filter(k => k !== prop)
    .forEach(key => {
      filteredObj[key] = obj[key]
    })
  return filteredObj
}

const filteredName = filterObj(name, 'last')

console.log(filteredName) // { first: 'John', middle: 'Bob' }
