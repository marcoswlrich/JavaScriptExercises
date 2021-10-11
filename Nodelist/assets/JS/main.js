const paragrafos = document.querySelector('.paragrafos')
const ps = paragrafos.querySelectorAll('p')

const corBody = getComputedStyle(document.body)
const backgroundColorBody = corBody.backgroundColor

for (let p of ps) {
  p.style.backgroundColor = backgroundColorBody
  p.style.color = '#FFFFFF'
}
