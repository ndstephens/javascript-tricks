// Check if a property exists in object

const user = {
  name: 'John',
  address: {
    street: 'Main',
    city: 'New York',
  },
}

let property

//
//*--------------------------------------------------/
//*     'in' OPERATOR
//*--------------------------------------------------/

property = 'name' in user // TRUE

//? will return 'FALSE' for NESTED properties.  must provide PARENT CONTEXT for property
property = 'street' in user // FALSE
property = 'street' in user.address // TRUE

//? using 'in' will also return 'TRUE' for properties on the PROTOTYPE, a condition we may NOT want
property = 'toString' in user // TRUE

//
//*--------------------------------------------------/
//*     hasOwnProperty()
//*--------------------------------------------------/

property = user.hasOwnProperty('name') // TRUE

//? AGAIN, will return 'FALSE' for NESTED properties.  must provide PARENT CONTEXT for property
property = user.hasOwnProperty('street') // FALSE
property = user.address.hasOwnProperty('street') // TRUE

//? will return 'FALSE' for properties on the PROTOTYPE, a preferred condition
property = user.hasOwnProperty('toString') // FALSE

//
console.log(property)
