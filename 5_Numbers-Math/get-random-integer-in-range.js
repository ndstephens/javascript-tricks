// Get random integer in range

// 2, 10 -> 5

Math.round(Math.random() * (10 - 2) + 2) // inclusive of min and max
// 2 - 10

Math.floor(Math.random() * (10 - 2) + 2) // inclusive of min NOT max
// 2 - 9

Math.ceil(Math.random() * (10 - 2) + 2) // inclusive of max NOT min
// 3 - 10

//* CREATE FUNCTION THAT INCLUDES MIN AND MAX
function getRandomInt(min, max) {
  return Math.round(Math.random() * (max - min) + min)
}

getRandomInt(2, 15)
// 2 - 15
