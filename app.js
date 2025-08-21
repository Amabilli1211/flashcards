function criaCartao(categoria, pergunta, resposta) {
    let container = document.getElementById('container')
    let cartao = document.createElement('article')
    cartao.className = 'cartao'

    cartao.innerHTML = `
    <div class="cartao__conteudo">
    <h3>${categoria}</h3>
    <div class="cartao__conteudo__pergunta">
        <p>${pergunta}</p>
    </div>
    <div class="cartao__conteudo__resposta">
        <p>${resposta}</p>
    </div>
    </div>
    `

    let respostaEstaVisivel = false

    function viraCartao() {
        respostaEstaVisivel = !respostaEstaVisivel
        cartao.classList.toggle('active', respostaEstaVisivel)
    }
    cartao.addEventListener('click', viraCartao)


    container.appendChild(cartao)

}

criaCartao(
  'Paleontologia',
  'Qual é o maior dinossauro carnívoro?',
  'O maior dinossauro carnívoro é o Spinosaurus'
)

criaCartao(
  'Paleontologia',
  'Qual dinossauro é conhecido pelo seu pescoço longo?',
  'O Brachiosaurus'
)

criaCartao(
  'Paleontologia',
  'O Tyrannosaurus Rex era herbívoro ou carnívoro?',
  'Ele era carnívoro'
)

criaCartao(
  'Paleontologia',
  'O que significa o nome Triceratops?',
  'Significa "face com três chifres"'
)
