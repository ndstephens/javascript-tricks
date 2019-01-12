// Using the ternary operator

const loggedIn = false
const user = 'John'

if (loggedIn) {
  console.log(`${user} is logged in`)
} else {
  console.log('no user') // 'no user'
}

//? use TERNARY instead
console.log(loggedIn ? `${user} is logged in` : 'no user') // 'no user'

//
//
//* use a Ternary for conditional display when using either a template string or JSX
//
const api = 'https://api.myjson.com/bins/71z2m'
const body = document.querySelector('body')

fetch(api)
  .then(res => res.json())
  .then(data => outputUserInfo(data))

//? using a ternary for a condition display (email)
function outputUserInfo({ name, age, email }) {
  body.innerHTML = `
    <h1>${name}</h1>
    <p>${age}</p>
    <p>${email ? `Email: ${email}` : `no email listed for ${name}`}</p>
  `
}
