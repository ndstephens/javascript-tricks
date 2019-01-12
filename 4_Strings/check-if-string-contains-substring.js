// Check if string contains substring

const URL = 'https://api.github.com/users/reedbarger'

console.log(URL.includes('github')) // true

console.log(URL.indexOf('reed') > -1) // true

console.log(URL.startsWith('https')) // true

console.log(URL.endsWith('reedbarger')) // true
