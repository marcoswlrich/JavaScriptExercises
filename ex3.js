const data = new Date()
const dia = data.getDay()
const mes = data.getMonth()
const ano = data.getFullYear()
const horas = data.getHours()
const min = data.getMinutes()

let diaSemanaTexto
switch (dia) {
  case 0:
    diaSemanaTexto = 'Domingo'
    break
  case 1:
    diaSemanaTexto = 'Segunda-Feira'
    break
  case 2:
    diaSemanaTexto = 'Terça-Feira'
    break
  case 3:
    diaSemanaTexto = 'Quarta-Feira'
    break
  case 4:
    diaSemanaTexto = 'Quinta-Feira'
    break
  case 5:
    diaSemanaTexto = 'Sexta-feira'
    break
  case 6:
    diaSemanaTexto = 'Sábado'
    break
  default:
    diaSemanaTexto = ''
}

let mesTexto

switch (mes) {
  case 0:
    mesTexto = 'Janeiro'
    break
  case 1:
    mesTexto = 'Fevereiro'
    break
  case 2:
    mesTexto = 'Março'
    break
  case 3:
    mesTexto = 'Abril'
    break
  case 4:
    mesTexto = 'Maio'
    break
  case 5:
    mesTexto = 'Junho'
    break
  case 6:
    mesTexto = 'Julho'
    break
  case 7:
    mesTexto = 'Agosto'
    break
  case 8:
    mesTexto = 'Setembro'
    break
  case 9:
    mesTexto = 'Outubro'
    break
  case 10:
    mesTexto = 'Novembro'
    break
  case 11:
    mesTexto = 'Dezembro'
    break
  default:
    mesTexto = ''
    break
}

console.log(
  `${diaSemanaTexto}, ${dia} de ${mesTexto} de ${ano} ${horas}:${min}`
)
