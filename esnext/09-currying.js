{
  // function sum(num1, num2) {
  //   return num1 + num2;
  // }

  const sum = (num1, num2) => num1 + num2;

  console.log(sum(2, 3));
  console.log(sum(2, 4));
}

// function sum(num1) {
//   return function (num2) {
//     return num1 + num2;
//   };
// }

const sum = (num1) => (num2) => num1 + num2;

const sumTwo = sum(2);

console.log(sumTwo(3));
console.log(sumTwo(4));

console.log(sum(2)(3));

{
  // const sum = (num1, num2) => num1 + num2;
  const sum = (num1) => (num2) => num1 + num2;

  const arr = [1, 2, 3, 4, 5];
  const sumTwo = sum(2);
  // const incrementedByTwo = arr.map((item) => sum(2, item));
  // const incrementedByTwo = arr.map((item) => sumTwo(item));
  // const incrementedByTwo = arr.map(sumTwo);
  const incrementedByTwo = arr.map(sum(2));
  console.log(incrementedByTwo);
}
