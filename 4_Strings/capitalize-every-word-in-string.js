// Capitalize every word in string

// 'hello world' -> 'Hello World'

function capitalizeWords(str) {
  return str
    .split(' ')
    .map(word => `${word[0].toUpperCase()}${word.slice(1)}`)
    .join(' ')
}

const result = capitalizeWords('hello world')
console.log(result) // 'Hello World'
