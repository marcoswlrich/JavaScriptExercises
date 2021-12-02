const promessa = new Promise((resolve, reject) => {
  try {
    // throw new Error()
    return setTimeout(() => {
      resolve(20)
    }, 1000)
  } catch (error) {
    reject('Deu ruim. arruma isso aê')
  }
})

const soma = num => num + num

const p = promessa
  .then(res => {
    console.log('res :>>', res)
    soma(res)
    return soma(res)
  })
  .then(val => {
    console.log('val :>>', val)
    return soma(val) + val
  })
  .then(item => {
    console.log('item :>>', item)
    return item
  })
  .catch(err => {
    console.log('err :>>', err)
  })
