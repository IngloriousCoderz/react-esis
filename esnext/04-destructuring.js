const arr = [1, 2, 3, 4, 5]

// const first = arr[0]
// const second = arr[1]

const [first, second] = arr
const [, , third] = arr
const last = arr[arr.length - 1]

console.log(first, second, third, last)

const obj = { a: 1, b: 2, c: 3 }

// const firstProperty = obj.a
// const c = obj.c

const { a: firstProperty, c } = obj

console.log(firstProperty, c)