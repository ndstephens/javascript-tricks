// Check if a property exists in object

const user = {
  name: 'John',
  address: {
    street: 'Main',
    city: 'New York',
  },
}

// const property = 'name' in user;

const property = user.address.hasOwnProperty('street')
console.log(property) // true
