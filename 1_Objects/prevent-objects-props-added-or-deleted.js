// Prevent object properties from being added/deleted

const user = {
  name: 'jeff',
  email: 'jeff@gmail.com',
}

//*--------------------------------------------------/
//*     Object.seal(obj)
//*--------------------------------------------------/
//? call this method on an object to prevent the addition of new properties AND the deletion of current properties

//* STILL ABLE TO MUTATE CURRENT PROPERTIES

Object.seal(user)

//? calling 'getOwnPropertyDescriptors' reveals that all current properties had their 'configurable' attributes set to 'false', which means they can no longer be deleted
Object.getOwnPropertyDescriptors(user)
// {
//   email: {
//     value: "jeff@gmail.com",
//     writable: true,
//     enumerable: true,
//*    configurable: false
//   },
//   name: {
//     value: "jeff",
//     writable: true,
//     enumerable: true,
//*    configurable: false
//   }
// }

//? attempt to ADD a new property FAILS
user.password = 'password123'

console.log(user)
// {
//   name: "jeff",
//   email: "jeff@gmail.com"
// }

//? attempt to DELETE a property FAILS (configurable: 'false')
delete user.name // FALSE

console.log(user)
// {
//   name: "jeff",
//   email: "jeff@gmail.com"
// }

//* STILL ABLE TO MUTATE CURRENT PROPERTIES

//
//*--------------------------------------------------/
//*     Object.isSealed(obj)
//*--------------------------------------------------/
//? check to see if an object is sealed (if addition AND deletion of properties is prevented)
Object.isSealed(user) // TRUE

//? in this case the result is 'TRUE'...
//? b/c we called 'Object.seal(user)' earlier
