const arr = [1, 2, 3, 2, 4, 1, 5]

const set = new Set(arr)
console.log(set)

const arrWithoutDuplicates = [...new Set(arr)]
console.log(arrWithoutDuplicates)
