// Use IIFEs or block scope (w/ let / const) to hide / expose data

//* IIFE
const getUserData = (function() {
  const name = 'John'
  const email = 'john@gmail.com'
  const password = 'alsdfjaskdf'

  return {
    name,
    email,
  }
})()

console.log(getUserData)
// {name: "John", email: "john@gmail.com"}

//
//
//* Using block scope with const (same with let)
{
  const name = 'John'
  const email = 'john@gmail.com'
  const password = 'alskdfjalk'

  const sayHi = () => {
    return `Hi, ${name}!`
  }

  //? PURPOSEFULLY use 'var' here so that 'result' is available outside of this block.  similar to the 'return' statement in the IIFE above.  here we put 'result' on the global scope
  var result = {
    name,
    email,
    sayHi,
  }
}

console.log(result.sayHi())
// "Hi, John!"
