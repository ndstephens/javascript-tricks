// Convert object to string

//* Using JSON.stringify() with OPTIONS

//? The second argument controls what parts of the stringified object are shown.  'null' is the same as not providing anything, which means all properties will be shown.  Otherwise can use a 'replacer' function to filter out properties to be shown, or a 'replacer' array that lists only the names of the properties to be shown

//? The third argument, aka the 'space' argument, controls spacing in the final string.  Provide a number to indicate number of spaces for successive levels of indentation.  A string will have successive levels indented by that string (the string can be '\t' for tabs)

//* see the MDN for more info

function output(data) {
  const str = JSON.stringify(data, null, 2)
  const isError = str.includes('Not Found')
  const html = `
    <pre style="color: ${isError ? 'red' : 'green'}">
      ${str}
    </pre>`
  document.write(html)
}

fetch('https://api.github.com/users/tom')
  .then(res => res.json())
  .then(data => output(data))
