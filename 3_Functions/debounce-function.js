// Debounce function

// A function that, when called, can only be called after a certain amount of time has passed

const debounce = (fn, ms) => {
  //* CLOSURE
  let timeout
  return function(args) {
    clearTimeout(timeout)
    timeout = setTimeout(() => fn(args), ms)
  }
}

const onResize = event => {
  console.log(event, window.innerHeight, window.innerWidth)
}

window.addEventListener('resize', debounce(onResize, 500))
//? SAME AS...
// window.addEventListener('resize', e => {
//   clearTimeout(timeout)
//   timeout = setTimeout(() => onResize(e), 500)
// })
