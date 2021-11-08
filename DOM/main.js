// getElementByid() (element)

const element = document.getElementById('blog-title')

//getElementsByClassName (HTML Collection)

const classe = document.getElementsByClassName('one-class')

//getElementsByTagName (HTML Collection)

const tag = document.getElementsByTagName('p')

//querySelector (element)

const element2 = document.querySelector('.one-class')

//querySelectorAll - coleção de coletores (Nodelist)

const elements = document.querySelectorAll('.one-class')

//Manipular conteúdos

//textContent - alterar o conteudo de texto

const element3 = document.querySelector('h1')

element3.textContent = 'Olá devs'

//innerText - texto interno do HTML

element3.innerText = 'Olá devs3'

//innerHTML - usar texto com HTML - adicionar tags html

element3.innerHTML = '<span>Olá devs</span>'

//Value - manipulando conteúdo

const conteudo = document.querySelector('input')

element3.value = 'Valor que eu quiser'

// Manipulando elementos - Atributos

const header = document.querySelector('header')

header.setAttribute('id', 'header') //add id

const headerId = document.querySelector('#header')

header.removeAttribute('id') //removendo ID

//alterando estilos - add estilos CSS

const element4 = document.querySelector('body')

element4.style.backgroundColor = '#ffff'

//alterando estilos - classList

element4.classList.add('active') //adicionar - active nome da classe seletor de css como exemplo

element4.classList.remove('active') //remove

element4.classList.toggle('active') //se a classe existir ele remove se não exister add a classe

//navegando pelos elementos
//parentElement e parentNode - pai

const body = document.querySelector('body')

body.parentNode // pais da tag
body.parentElement //pais da tag

//filhos da tag

const el = document.querySelector('body')

el.childNodes //leva em conta os espaços vazios
el.children // não leva em conta os espaços vazios

el.firstElementChild //ultimo filho
el.lastElementChild //ultimo filho

//irmão da tag

el.nextSibling //pega o proximo irmão
el.previousElementSibling

//Criando e adicionando elementos

//creatElement

const div = document.createElement('div')
div.innerText = 'Olá Devs'

//append prepend

const body = document.querySelector('body')

body.append(div)

//insertBefore

const body = document.querySelector('body')
const script = body.querySelector('script')
body.insertBefore(div, script) // o segundo é o nó de ultimo elemento para ficar antes dele.

//insertafter -  depois de uma tag
const body = document.querySelector('body')
const header = body.querySelector('header')
body.insertBefore(div, header.nextElementSibling)
