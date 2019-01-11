// Find shared values between two arrays

const men = ['Jim', 'Doug', 'Fred']

const over50 = ['Angie', 'Dave', 'Jessica', 'Fred']

//? Doesn't matter which array we start with...same result

const shared = over50.filter(person => men.includes(person))
// const shared = men.filter(man => over50.includes(man))

console.log(shared) // [ 'Fred' ]
