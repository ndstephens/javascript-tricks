// Assign array values to variables

const nums = [1, 2, 3, 3.4]

// Destructuring
// var [ one, two, three, decimal ] = nums;
// console.log(one);
// console.log(two);
// console.log(three);
// console.log(decimal);

//* Using destructuring to swap variables

const name = 'doug@gmail.com'
const email = 'doug'

//? First construct an array from which to destructure
//? Then rename the values
const [userEmail, userName] = [name, email]
console.log(userEmail)
console.log(userName)
