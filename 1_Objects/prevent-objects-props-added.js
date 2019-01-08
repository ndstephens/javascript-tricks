// Prevent object properties from being added

const user = {
  name: 'jeff',
  email: 'jeff@gmail.com',
}

//*--------------------------------------------------/
//*     Object.preventExtensions(obj)
//*--------------------------------------------------/
//? call this method on an object to prevent the addition of new properties

//* STILL ABLE TO MUTATE (and delete) CURRENT PROPERTIES

Object.preventExtensions(user)

//? display the attributes of each property on an object
//? 'Object.preventExtensions(user)' does not change them, just displays them
Object.getOwnPropertyDescriptors(user)
// {
//   email: {
//     value: "jeff@gmail.com",
//     writable: true,
//     enumerable: true,
//     configurable: true
//   },
//   name: {
//     value: "jeff",
//     writable: true,
//     enumerable: true,
//     configurable: true
//   }
// }

//? attempt to ADD a new property FAILS
user.password = 'password123'

console.log(user)
// {
//   name: "jeff",
//   email: "jeff@gmail.com"
// }

//? HOWEVER, attempt to DELETE a property WORKS (configurable: 'true')
delete user.name // TRUE

console.log(user)
// {
//   email: "jeff@gmail.com"
// }

//* ALSO, STILL ABLE TO MUTATE CURRENT PROPERTIES

//
//*--------------------------------------------------/
//*     Object.isExtensible(obj)
//*--------------------------------------------------/
//? check to see if an object is extensible (if new properties can be ADDED)
Object.isExtensible(user) // FALSE

//? in this case the result is 'FALSE'...
//? b/c we called 'Object.preventExtensions(user)' earlier
