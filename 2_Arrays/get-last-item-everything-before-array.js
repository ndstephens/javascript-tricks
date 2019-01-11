// Get last item in array, get everything before last item in array

const names = ['Bill', 'Fred', 'Doug', 'Jessica', 'Abe', 'John', 'Angie']

//* LAST ITEM IN ARRAY
const lastNameInArray = names.slice(-1) //? SIMPLER THAN WRITING...
// const lastNameInArray = names[names.length - 1]
console.log(lastNameInArray) // 'Angie'

//
//* EVERYTHING BEFORE LAST ITEM IN ARRAY
const beforeLastName = names.slice(0, -1) //? SIMPLER THAN WRITING...
// const beforeLastName = names.slice(0, names.length - 1)
console.log(beforeLastName)
// ['Bill', 'Fred', 'Doug', 'Jessica', 'Abe', 'John']
