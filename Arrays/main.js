//Primeira opção de concatenar arrays
const a1 = [1, 2, 3]
const a2 = [4, 5, 6]
const a3 = a1.concat(a2)
// const a3 = a1.concat(a2, [7, 8, 9], 'Marcos')
console.log(a3)

//Segunda opção de concatenar arrays
//... rest -> spread

const b1 = [1, 2, 3]
const b2 = [4, 5, 6]
const b3 = [...b1, ...b2]
// const b3 = [...b1, 'Marcos', ...b2, ...[7, 8, 9]]
console.log(b3)
