console.log("Hello world!");

var a = 2; //?
console.log(a);

const b = 3;
// b = 5;

function myfunc() {
  if (true) {
    let a = 3;
  }

  if (true) {
    let a = 4;
  }

  console.log(a)
}

myfunc()

const str = 'Hello world'
str[4] = 'z'
console.log(str)

console.log(str.slice(0, 4) + 'z' + str.slice(5))
