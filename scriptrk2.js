/*
### Celsius en fahrenheit

Crie uma função que receba uma string em celsius ou
fahrenheit e faça a transformação de uma unidade para 
outra

c = (f - 32) * 5/9
f = c * 9/5 + 32

*/

function transfGrau(grau) {
  const celsiusExist = grau.toUpperCase().includes('C')
  const fahrenheititExist = grau.toUpperCase().includes('F')

  if (!celsiusExist && !fahrenheititExist) {
    throw new Error('Grau não identificado')
  }

  let atualizaGrau = Number(grau.toUpperCase().replace('F', ''))
  let formula = fahrenheit => ((fahrenheit - 32) * 5) / 9
  let simbGrau = 'C'

  if (celsiusExist) {
    atualizaGrau = Number(grau.toUpperCase().replace('C', ''))
    formula = celsius => (celsius * 9) / 5 + 32
    simbGrau = 'F'
  }

  return formula(atualizaGrau) + simbGrau
}

try {
  console.log(transfGrau('10C'))
  console.log(transfGrau('50F'))
} catch (error) {
  console.log(error.message)
}
