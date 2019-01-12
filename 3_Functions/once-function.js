// Function that can be called only once

//* Similar to a Singleton

const button = document.querySelector('button')

const once = (fn, ...args) => {
  let called = false
  console.log(args)
  return function() {
    if (!called) {
      called = true
      return fn(...args)
    }
    return null
  }
}

const onClick = (text, time) => console.log(`${text} at ${time}`)

button.addEventListener(
  'click',
  once(onClick, 'form submitted!', new Date(Date.now())),
)
