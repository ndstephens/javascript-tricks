// Prevent object properties from being added, deleted or modified

const user = {
  name: 'jeff',
  email: 'jeff@gmail.com',
}

//*--------------------------------------------------/
//*     Object.freeze(obj)
//*--------------------------------------------------/
//? call this method on an object to prevent ALL changes to the object

//* CAN NOT MUTATE CURRENT PROPERTIES

Object.freeze(user)

//? calling 'getOwnPropertyDescriptors' reveals that all current properties had their 'writable' AND 'configurable' attributes set to 'false', which means they can no longer be deleted
Object.getOwnPropertyDescriptors(user)
// {
//   email: {
//     value: "jeff@gmail.com",
//*    writable: false,
//     enumerable: true,
//*    configurable: false
//   },
//   name: {
//     value: "jeff",
//*    writable: false,
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

//? attempt to MUTATE a property FAILS (writable: 'false')
user.name = 'Amy'

console.log(user)
// {
//   name: "jeff",
//   email: "jeff@gmail.com"
// }

//
//*--------------------------------------------------/
//*     Object.isFrozen(obj)
//*--------------------------------------------------/
//? check to see if an object is frozen (if addition AND deletion AND mutation of properties is prevented)
Object.isFrozen(user) // TRUE

//? in this case the result is 'TRUE'...
//? b/c we called 'Object.freeze(user)' earlier
