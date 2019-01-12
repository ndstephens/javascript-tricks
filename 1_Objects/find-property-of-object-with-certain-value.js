// Find property of object with certain value

//*--------------------------------------------------/
//*     Object.keys(obj) AND Object.values(obj)
//*--------------------------------------------------/

const users = {
  John: { id: 1, subscribed: true },
  Doug: { id: 2, subscribed: false },
  Dave: { id: 3, subscribed: true },
}

const property = Object.keys(users).find(key => users[key].subscribed === true)

//? 'find' returns ONLY the first 'true' result
console.log(property) // John

//

const value = Object.values(users).find(obj => obj.subscribed === true)

console.log(value) // { id: 1, subscribed: true }
