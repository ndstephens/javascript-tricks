// Fixing Math errors with decimals

//* THE PROBLEM:
console.log(0.1 + 0.2)
// 0.30000000000000004

//? Use 'toFixed()' to prevent errors at the end of long decimals (cap the value)
console.log(Number((0.1 + 0.2).toFixed(1)) === 0.3)
// equates to "0.3 === 0.3"
// true

console.log(0.1 + 0.2 - 0.3 < Number.EPSILON)
// true

//? First convert to an Integer by multiplying by '10' and using 'Math.round()'
console.log(Math.round((0.1 + 0.2) * 10) / 10)
// equates to 'Math.round(0.3 * 10) = 3 / 10 = 0.3'
// 0.3
