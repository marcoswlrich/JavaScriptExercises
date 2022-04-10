// Para este desafio, você terá que assistir ao vídeo! Em seguida, construa a
// imagem funcionalidade de carregamento que acabei de mostrar na tela.

// Suas tarefas:
// As tarefas não são superdescritivas desta vez, para que você possa descobrir
// algumas coisas você mesma. Finja que está trabalhando por conta própria 😉

// PARTE 1
// 1. Crie uma função 'createImage' que receba 'imgPath' como entrada.
// Esta função retorna uma promessa que cria uma nova imagem (use
// document.createElement('img')) e define o atributo .src para o
// caminho de imagem fornecido
// 2. Quando a imagem terminar de carregar, anexe-a ao elemento DOM com o
// classe 'images' e resolva a promessa. O valor cumprido deve ser o
// elemento de imagem em si. Caso haja um erro ao carregar a imagem (ouvir
// o evento 'error'), rejeite a promessa
// 3. Se esta parte for muito complicada para você, apenas assista a primeira
// parte da solução.

// PARTE 2
// 4. Consuma a promessa usando .then e também adicione um manipulador de erros
// 5. Depois que a imagem for carregada, pause a execução por 2 segundos usando o
// 'wait' função que criamos anteriormente
// 6. Após os 2 segundos, oculte a imagem atual (defina display CSS
// propriedade para 'none') e carregue uma segunda imagem (Dica: use o elemento
// image retornado pela promessa 'createImage' de ocultar a imagem atual. Você irá
// preciso de uma variável global para isso 😉)
// 7. Depois que a segunda imagem for carregada, pause a execução por 2 segundos
// novamente
// 8. Após os 2 segundos, oculte a imagem atual

// Dados de teste: Imagens na pasta img. Teste o manipulador de erros passando um
// erro caminho da imagem. Defina a velocidade da rede para “Fast 3G” na guia Rede
// das ferramentas de desenvolvimento, caso contrário, as imagens carregam muito
// rápido

// BOA SORTE 😀

const wait = function (seconds) {
  return new Promise(function (resolve) {
    setTimeout(resolve, seconds * 1000)
  })
}
const imgContainer = document.querySelector('.images')
const createImage = function (imgPath) {
  return new Promise(function (resolve, reject) {
    const img = document.createElement('img')
    img.src = imgPath
    img.addEventListener('load', function () {
      imgContainer.append(img)
      resolve(img)
    })
    img.addEventListener('error', function () {
      reject(new Error('Image not found'))
    })
  })
}
let currentImg

createImage('img/img-1.jpg')
  .then((img) => {
    currentImg = img
    console.log('Image 1 loaded')
    return wait(2)
  })
  .then(() => {
    currentImg.style.display = 'none'
    return createImage('img/img-2.jpg')
  })
  .then((img) => {
    currentImg = img
    console.log('Image 2 loaded')
    return wait(2)
  })
  .then(() => {
    currentImg.style.display = 'none'
  })
  .catch((err) => console.error(err))
