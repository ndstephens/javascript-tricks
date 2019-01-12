/* eslint-disable no-return-await */

// Measure time it takes function to run

//* THE ONLY REAL TAKEAWAY FROM THIS IS SIMPLY USING THE 'console.time('name')' AND 'console.timeEnd('name')' CALLS WHICH DISPLAY THE ELAPSED TIME IN THE CONSOLE

const getTomsUserData = async () =>
  await fetch('https://api.github.com/users/tom')

const time = fn => {
  console.time('time')
  const result = fn()
  console.timeEnd('time')
  return result
}

time(() => getTomsUserData())
// time: 2.06396484375ms
// Promise {<pending>}

/* With variables to timed function */

const getUserData = async user =>
  await fetch(`https://api.github.com/users/${user}`)

const elapsedTime = (fn, ...args) => {
  console.time('time')
  const result = fn(...args)
  console.timeEnd('time')
  return result
}

elapsedTime(() => getUserData('wesbos'))
// time: 1.2021484375ms
// Promise {<pending>}
