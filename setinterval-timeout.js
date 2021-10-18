function hora() {
  let data = new Date()

  return data.toLocaleTimeString('pt-BR', {
    hour12: false
  })
}

const timer = setInterval(function () {
  console.log(hora())
}, 1000)

setTimeout(function () {
  clearInterval(timer)
}, 6000)

setTimeout(function () {
  console.log('A hora parou')
}, 9000)
