// ind negativos   -5      -4       -3       -2       -1
//ind positivos     0       1        2        3        4
const paises = ['Brasil', 'EUA', 'Africa', 'Peru', 'Argentina']

//paises.splice(indice, delete, eleme1, element2) // esses ultimos adicionando
// pop remove o ultimo elementos

const removidos = paises.splice(3, 2) // apartir do terceiro indice remover dois (4,1) remove o ultimo
const removidosNeg = paises.splice(-2, 1) // esse excluiu o Peru
const remov2 = paises.splice(-2, Number.MAX_VALUE) //exemplo excluira tudo depois do -2 bom para arrays gigantes
const removAdd = paises.splice(3, 0, 'França') //vai adicionar França no indice 3 - remove 0
const removEx = paises.splice(3, 1, 'França') // adicionaria França no lugar de Peru

console.log(nomes, removidos)

// igual ao shift
// const removidos = paises.splice(0, 1) - remove o primeiro

//simula o push - adiciona no final da array - melhor usar o push somente exemplo
// paises.splice(paises.length, 0, 'Angola')
