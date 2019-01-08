// Merge multiple objects into one object

const defaultUser = {
  name: 'default',
  email: 'default',
  subscribed: true,
}

const actualUser = {
  name: 'Don',
  email: 'don@gmail.com',
  phone: 1234567890,
}

//*--------------------------------------------------/
//*     Object SPREAD
//*--------------------------------------------------/

let userData = { ...defaultUser, ...actualUser }

console.log(userData)
// { name: 'Don', email: 'don@gmail.com', subscribed: true, phone: 1234567890 }

//? AS LONG AS 'actualUser' comes after 'defaultUser' in the Spread statement then it will overwrite the properties with the same key ('name' and 'email')

//? can include more than 2 objects

//? all unique properties in all objects will be included

//
//
//*--------------------------------------------------/
//*     Object.assign(target, source)
//*--------------------------------------------------/
//? better to use Object Spread as seen above

userData = Object.assign(defaultUser, actualUser)

console.log(userData)
// { name: 'Don', email: 'don@gmail.com', subscribed: true, phone: 1234567890 }

//? can include more than 2 objects
