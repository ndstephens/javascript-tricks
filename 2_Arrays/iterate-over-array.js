// Iterate over array

//? For LOOP
const nums = [1, 2, 3, 4, 5]

for (let i = 0; i < nums.length; i++) {
  console.log(nums[i]) // 1, 2, 3, 4, 5
}

//
//? ForEach LOOP
const newArr = []

nums.forEach((num, i, arr) => {
  console.log(num + arr[i]) // 2, 4, 6, 8, 10
  newArr.push(num)
  return newArr
})

console.log(newArr) // [1,2,3,4,5]

//
//? Map Function
const result = nums.map((el, i, arr) => arr[i] + el)
console.log(result) // [2,4,6,8,10]

//
//? For-Of LOOP
const newArr2 = []

for (const [i, num] of nums.entries()) {
  newArr2.push([i, num])
}

console.log(newArr2) // [[0,1], [1,2], [2,3], [3,4], [4,5]]

//
//? Reduce Function
const res = nums.reduce((acc, val, i, arr) => {
  acc.push(arr[i])
  return acc
}, [])

console.log(res) // [1, 2, 3, 4, 5]
