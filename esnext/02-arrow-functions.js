// function declaration
// subject to HOISTING

saySomething()

function saySomething() {
  console.log('something')
}

// function expression

const saySomethingExpr = function() {
  console.log('something')
};

saySomethingExpr()

// arrow function

const saySomethingArrow = () => {
  console.log('something')
}

saySomethingArrow()

console.log(this)
document.querySelector('button').addEventListener('click', (event) => {
  console.log(event)
  console.log(this)
})

function add(num1, num2) {
  return num1 + num2
}

const add = function(num1, num2) {
  return num1 + num2
}

const add = (num1, num2) => {
  return num1 + num2
}

// add: (num1, num2) -> num1 + num2
const add = (num1, num2) => num1 + num2
