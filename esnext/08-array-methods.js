const arr = [1, 2, 3, 4, 5]

const square = (num) => num ** 2
const isEven = (num) => num % 2 === 0
const sum = (num1, num2) => num1 + num2

for (let i = 0; i < arr.length; i++) {
  console.log(i, arr[i])
}

// for (let key in obj) {
//   if (obj.hasOwnProperty(key)) {

//   }
// }

for (const item of arr) {
  console.log(item)
}

arr.forEach((item, index, arr) => {
  console.log(item, index, arr)
})

arr.forEach((item) => {
  console.log(item)
})

{
  const squares = []
  for (const item of arr) {
    squares.push(item * item)
  }
  console.log(squares)
}

{
  // const squares = arr.map((item) => {
  //   return item * item
  // })
  const squares = arr.map(square)
  console.log(arr)
  console.log(squares)
}

{
  const evens = []
  for (const item of arr) {
    if (isEven(item)) {
      evens.push(item)
    }
  }
  console.log(evens)
}

{
  const evens = arr.filter(isEven)
  console.log(evens)
}

{
  let even = null
  for (let i = 0; even == null && i < arr.length; i++) {
    const item = arr[i]
    if (isEven(item)) {
      even = item
    }
  }
  console.log(even)
}

{
  const even = arr.find(isEven)
  console.log(even)
}

{
  let index = -1
  for (let i = 0; index < 0 && i < arr.length; i++) {
    const item = arr[i]
    if (isEven(item)) {
      index = i
    }
  }
  console.log(index)
}

{
  const index = arr.findIndex(isEven)
  console.log(index)
}

{
  let hasEven = false
  for (const item of arr) {
    if (isEven(item)) {
      hasEven = true
    }
  }
  console.log(hasEven)
}

{
  const hasEven = arr.some(isEven)
  console.log(hasEven)
}

{
  let allEven = true
  for (const item of arr) {
    if (!isEven(item)) {
      allEven = false
    }
  }
  console.log(allEven)
}

{
  const allEven = arr.every(isEven)
  console.log(allEven)
}

{
  let acc = 0 // init
  for (const item of arr) {
    acc += item // accumulate
  }
  console.log(acc) // return
}

{
  let acc = arr[0] // init
  for (let i = 1; i < arr.length; i++) {
    acc += arr[i] // accumulate
  }
  console.log(acc) // return
}

{
  const sum = arr.reduce(
    (acc, item) => {
      acc += item
      return acc
    },
    0
  )
  console.log(sum)
}

{
  const sumOfNumbers = arr.reduce(sum)
  console.log(sumOfNumbers)
}
