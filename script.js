let quantidadeCartas;
const cartas = ['media/bobrossparrot.gif', 'media/explodyparrot.gif', 'media/fiestaparrot.gif', 'media/metalparrot.gif', 'media/revertitparrot.gif', 'media/tripletsparrot.gif', 'media/unicornparrot.gif'];
let jogo = document.querySelector('.jogo');

function perguntaQuantidadeCartas() {
    quantidadeCartas = Number(prompt('Com quantas cartas deseja jogar?'))
    while (quantidadeCartas < 4 || quantidadeCartas > 14 || quantidadeCartas % 2 !== 0) {
        quantidadeCartas = Number(prompt('Não é possível jogar com esse número de cartas, você deve escolher um número par entre 4 e 14. Com quantas cartas deseja jogar?'))
    }
}

function adicionaCarta() {
    jogo.innerHTML = ''
    for (i = 0; i < quantidadeCartas; i++) {
        jogo.innerHTML +=   `<div class="carta" onclick = "viraCarta(this)">
                                <div class="frente escondido">
                                    <img src=${cartas[i]}>
                                </div>
                                <div class="tras">
                                    <img src="media/front.png">
                                </div>
                                
                            </div>`
    }
    console.log(jogo)
}

function viraCarta(elemento) {
    elemento.querySelector('.tras').remove('escondido')
    elemento.querySelector('.frente').add('escondido')
}

perguntaQuantidadeCartas()
adicionaCarta()