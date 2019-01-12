// Use 'break' and 'continue' for greater control when iterating

const users = [
  { name: 'Don', country: 'England' },
  { name: 'Vladimir', country: 'Russia' },
  { name: 'Maria', country: 'Spain' },
]

//* BREAK
//? when you find the Russian user, set that user to the 'russianUser' variable and break from the loop (you no longer need to keep searching through 'users')

let russianUser
for (const user of users) {
  console.log(user)
  if (user.country === 'Russia') {
    russianUser = user
    break
  }
}
console.log(russianUser) // { name: 'Vladimir', country: 'Russia' }

//
//* CONTINUE
//? add all 'users' to the array of 'newUsers', except for anyone named 'Don'.  Skip the rest of the code in that loop cycle, but overall keep the iteration of the 'users' array going

const newUsers = []
for (const user of users) {
  if (user.name === 'Don') {
    continue
  }
  console.log(user)
  newUsers.push(user)
}
console.log(newUsers)
//[{ name: 'Vladimir', country: 'Russia' }, { name: 'Maria', country: 'Spain' }]
