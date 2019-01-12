// Short-circuiting with Logical 'And' (&&)

//? select an h1 element and set its display to 'none'
const h1 = document.querySelector('h1')
h1.style.display = 'none' // 'none'

//? set a User's logged-in status to 'true'
const loggedIn = true

//* Old-school way of doing it
//? if the User is logged-in then set the display to 'block'
if (loggedIn) {
  h1.style.display = 'block'
}

//
//*--------------------------------------------------/
//*     Using Logical AND ( && )
//*--------------------------------------------------/
//? reset h1 display back to 'none'
h1.style.display = 'none'

//? if the User is logged-in then set the display to 'block'
//* IF THE LEFT SIDE IS TRUE, THEN "RUN" THE RIGHT SIDE OF THE OPERATOR
loggedIn && (h1.style.display = 'block')

//? CAN HAVE MULTIPLE THINGS RUN AS LONG AS THE LEFT-MOST IS 'TRUE'
loggedIn && (h1.style.display = 'block') && 'cool!' // "cool!"
