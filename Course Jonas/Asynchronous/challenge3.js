// Suas tarefas:
// PARTE 1
// 1. Escreva uma função assíncrona 'loadNPause' que recrie o Desafio #2, desta vez
// usando async/await (somente a parte onde a promessa é consumida, reutilize o
// função 'createImage' de antes)
// 2. Compare as duas versões, pense nas grandes diferenças e veja qual delas
// você gosta mais
// 3. Não se esqueça de testar o manipulador de erros e de definir a velocidade da
// rede para “Fast 3G” na guia Rede das ferramentas de desenvolvimento

// PARTE 2
// 1. Crie uma função assíncrona 'loadAll' que receba uma matriz de caminhos de
// imagem 'imgArr'
// 2. Use .map para fazer um loop sobre a matriz, para carregar todas as imagens
// com o Função 'createImage' (chame o array resultante 'imgs')
// 3. Confira o array 'imgs' no console! É como você esperava?
// 4. Use uma função de combinação de promessas para realmente obter as imagens do
// array 😉
// 5. Adicione a classe 'paralela' a todas as imagens (ela tem alguns estilos CSS)

// Dados de teste Parte 2: ['img/img-1.jpg', 'img/img-2.jpg', 'img/img-
// 3.jpg']. Para testar, desligue a função 'loadNPause'
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

// PART 1
const loadNPause = async function () {
  try {
    // Load image 1
    let img = await createImage('img/img-1.jpg')
    console.log('Image 1 loaded')
    await wait(2)
    img.style.display = 'none'
    // Load image 1
    img = await createImage('img/img-2.jpg')
    console.log('Image 2 loaded')
    await wait(2)
    img.style.display = 'none'
  } catch (err) {
    console.error(err)
  }
}
// loadNPause();

// PART 2
const loadAll = async function (imgArr) {
  try {
    const imgs = imgArr.map(async (img) => await createImage(img))
    const imgsEl = await Promise.all(imgs)
    console.log(imgsEl)
    imgsEl.forEach((img) => img.classList.add('parallel'))
  } catch (err) {
    console.error(err)
  }
}
loadAll(['img/img-1.jpg', 'img/img-2.jpg', 'img/img-3.jpg'])
