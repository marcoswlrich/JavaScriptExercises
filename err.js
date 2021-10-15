function retornaHora(data) {
  if (data && !(data instanceof Date)) {
    throw new TypeError('Aguardando instância de Date')
  }

  if (!data) {
    data = new Date()
  }

  return data.toLocaleTimeString('pt-br', {
    hour: '2-digit',
    minute: '2-digit',
    second: '2-digit',
    hour12: false
  })
}

try {
  const data = new Date('01-03-1995 13:32:45')
  const hora = retornaHora(data)
  console.log(hora)
} catch (err) {
  //tratar erro
  //console.log(err)
} finally {
  console.log('Tenha um ótimo dia')
}
