// Neste desafio você construirá uma função 'whereAmI' que renderiza um país
// apenas com base em coordenadas GPS. Para isso, você usará uma segunda API para
// geocodificar coordenadas. Então, neste desafio, você usará uma API por conta
// própria pela primeira vez 😁

// PARTE 1
// 1. Crie uma função 'whereAmI' que recebe como entrada um valor de latitude ('lat')
// e um valor de longitude ('lng') (estas são as coordenadas GPS, exemplos estão
// em teste dados abaixo).
// 2. Faça a “geocodificação reversa” das coordenadas fornecidas. Geocodificação
// reversa significa para converter coordenadas em um local significativo, como o
// nome de uma cidade e de um país.

// Use esta API para fazer geocodificação reversa: https://geocode.xyz/api.
// A chamada AJAX será feito para uma URL com este formato:
// https://geocode.xyz/52.508,13.381?geoit=json.
// Use a API de busca e promete obter os dados. Não use a função 'getJSON' que
// criamos, que está enganando 😉
// 3. Depois de ter os dados, dê uma olhada no console para ver todos os atributos
// que você recebeu sobre o local fornecido. Então, usando esses dados, registre um
// mensagem como esta para o console: “Você está em Berlim, Alemanha”
// 4. Encadeie um método .catch ao final da cadeia de promessas e registre erros no
// console
// 5. Esta API permite fazer apenas 3 requisições por segundo. Se você recarregar
// rápido, você obterá este erro com o código 403. Este é um erro com o pedido.
// Lembrar, fetch() não rejeita a promessa neste caso. Então crie um erro para
// rejeitar a promessa você mesmo, com uma mensagem de erro significativa

// PARTE 2
// 6. Agora é hora de usar os dados recebidos para renderizar um país. Então pegue
// o relevante atributo do resultado da API de geocodificação e conecte-o à API de
// países que temos vindo a utilizar.
// 7. Renderize o país e detecte quaisquer erros, assim como fizemos no último
// palestra (você pode até copiar esse código, não precisa digitar o mesmo código)

// Dados de teste:
// §Coordenadas 1: 52.508, 13.381 (Latitude, Longitude)
// §Coordenadas 2: 19.037, 72.873
// §Coordenadas 3: -33.933, 18.474
// BOA SORTE 😀

const whereAmI = function (lat, lng) {
  fetch(`https://geocode.xyz/${lat},${lng}?geoit=json`)
    .then((res) => {
      if (!res.ok) throw new Error(`Problem with geocoding ${res.status}`)
      return res.json()
    })
    .then((data) => {
      console.log(data)
      console.log(`You are in ${data.city}, ${data.country}`)
      return fetch(`https://restcountries.eu/rest/v2/name/${data.country}`)
    })
    .then((res) => {
      if (!res.ok) throw new Error(`Country not found (${res.status})`)
      return res.json()
    })
    .then((data) => renderCountry(data[0]))
    .catch((err) => console.error(`${err.message} 💥`))
}

whereAmI(52.508, 13.381)
whereAmI(19.037, 72.873)
whereAmI(-33.933, 18.474)
