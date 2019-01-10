// Remove falsy values from array

const temps = [72, 68, 65, undefined, 80, 0, -0, NaN, '', null]

//? 'filter' works by checking if the returned value is 'truthy' or 'falsey'

const newTemps = temps.filter(temp => temp)
// const newTemps = temps.filter(temp => Boolean(temp))
// const newTemps = temps.filter(temp => !!temp)

console.log(newTemps) // [ 72, 68, 65, 80 ]

//? Falsy values = values which, when converted to a boolean always become false

//? Six falsy values in JS = '', 0, -0, null, undefined, NaN

//*--------------------------------------------------/
//*     Boolean(item)    or     !!item
//*--------------------------------------------------/
