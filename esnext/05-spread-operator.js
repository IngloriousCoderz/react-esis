const arr = [1, 2, 3, 4, 5]

const [first, second, ...restOfArray] = arr

console.log(first, second, restOfArray)

// arr.push(6)
// console.log(arr)

const clonedArr = [...arr, 6]
// clonedArr.push(6)
console.log(arr, clonedArr)

console.log([...arr, ...arr])

const obj = { a: 1, b: 2, c: 3 }
const {a: firstProperty, c, ...restOfObject } = obj
console.log(firstProperty, c, restOfObject)

// obj.d = 4
// console.log(obj)

const clonedObj = { ...obj, d: 4 }
console.log(obj, clonedObj)

const dest = { a: 'z' }
const source1 = { a: 1, b: 2, c: 3 }
const source2 = { b: 3, d: 4 }
console.log(dest)
console.log(Object.assign({}, dest, source1, source2))
console.log(dest)

console.log({ ...dest, ...source1, ...source2 })

// const a = 1
// a = 2

const object1 = { a: 1 }
// object1 = [1, 2, 3]
object1.b = 2
console.log(object1)

const twin1 = 'Matteo'
const twin2 = 'Antony'

{
  let a = 1
  let b = a
  console.log(a, b)
  b = 2
  console.log(a, b)
}

{
  let a = { name: 'Matteo' }
  let b = a
  console.log(a, b)
  b.name = 'Antony'
  console.log(a, b)
}

function log(...params) {
  for (let i = 0; i < params.length; i++) {
    console.log(params[i])
  }
}

log('hello', 'world')
log()