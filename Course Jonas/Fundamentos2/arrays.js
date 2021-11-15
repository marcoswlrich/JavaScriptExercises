const amigos = ['João', 'Pedro', 'Rodrigo']

// add elementos
const newAmigo = amigos.push('Maria') //add depois do ultimo indice
console.log(amigos)
console.log(newAmigo)

amigos.unshift('Carol') // add como primeiro elemento

//remove elementos
amigos.pop() //remove o ultimo

amigos.shift() //remove o primeiro
