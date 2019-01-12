// Use function declarations for more flexible code

//? This works, BUT DON'T DO IT (don't use 'var' anyhow)
age = 30;
var age;
// 30

//? 'let' doesn't hoist like 'var' does
name = 'john';
let name;
// Uncaught ReferenceError: name is not defined

//? must assign a 'const' when you create it
email = 'john@gmail.com';
const email;
// Uncaught SyntaxError: Missing initializer in const declaration

//? with 'var' it only works for primitives, not function expressions
fn();
var fn = function() {};
// Uncaught TypeError: fn is not a function

func();
let func = () => {};
// Uncaught ReferenceError: func is not defined

//
//? hoisting does work with function statement or declarations
//? however it's usually bad practice
log(); // john

function log() {
  console.log('john');
}

//
log('jeff'); // jeff

function log(name) {
  console.log(name);
}


