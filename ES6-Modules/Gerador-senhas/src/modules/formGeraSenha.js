import gerarSenha from './geradores'
const resultEl = document.getElementById('result')
const lengthtEl = document.getElementById('length')
const uppercaseEl = document.getElementById('uppercase')
const lowercaseEl = document.getElementById('lowercase')
const numbersEl = document.getElementById('numbers')
const symbolsEl = document.getElementById('symbols')
const generate = document.getElementById('generate')
const clipboardEl = document.getElementById('clipboard')

export default () => {
  generate.addEventListener('click', () => {
    resultEl.innerHTML = gerar()
  })
}
function copy() {
  clipboardEl.addEventListener('click', () => {
    const textarea = document.createElement('textarea')
    const password = resultEl.innerHTML

    if (!password) {
      return
    }

    textarea.value = password
    document.body.appendChild(textarea)
    textarea.select()
    navigator.clipboard.writeText(textarea.value)
    textarea.remove()
    alert('Senha copiada!')
  })
}

function gerar() {
  const senha = gerarSenha(
    lengthtEl.value,
    uppercaseEl.checked,
    lowercaseEl.checked,
    numbersEl.checked,
    symbolsEl.checked
  )

  return senha || 'Nada selecionado'
}

export { copy }
