let quantidadeCartas;
const cartas = ['media/bobrossparrot.gif', 'media/explodyparrot.gif', 'media/fiestaparrot.gif', 'media/metalparrot.gif', 'media/revertitparrot.gif', 'media/tripletsparrot.gif', 'media/unicornparrot.gif'];
let jogo = document.querySelector('.jogo');
let cartasPartida = [];
let cartasMarcadas = document.querySelectorAll('.marcada');
let contador = 0;
let cartasCertas = true;

function perguntaQuantidadeCartas() {
    quantidadeCartas = Number(prompt('Com quantas cartas deseja jogar?'))
    while (quantidadeCartas < 4 || quantidadeCartas > 14 || quantidadeCartas % 2 !== 0) {
        quantidadeCartas = Number(prompt('Não é possível jogar com esse número de cartas, você deve escolher um número par entre 4 e 14. Com quantas cartas deseja jogar?'))
    }
}

function comparador() {
    return Math.random() - 0.5;
}

function criaCartasPartida() {
    for (i = 0; i < quantidadeCartas/2; i++) {
        cartasPartida.push(cartas[i])
        cartasPartida.push(cartas[i])
    }
    cartasPartida.sort(comparador)
}

function adicionaCarta() {
    jogo.innerHTML = ''
    for (i = 0; i < quantidadeCartas; i++) {        
        jogo.innerHTML +=   `<div class="carta" onclick = "viraCarta(this)">
                                <div class="frente">
                                    <img src="media/front.png">
                                </div>
                                <div class="tras escondido">
                                    <img src=${cartasPartida[i]}>
                                </div>
                            </div>`
    }
}

function viraCarta(elemento) {
    contador += 1;
    elemento.querySelector('.tras').classList.remove('escondido');
    elemento.querySelector('.frente').classList.add('escondido');
    elemento.classList.add('marcada');
    cartasMarcadas = document.querySelectorAll('.marcada');
    verificaJogada();
}

function desvirarCartas() {
    cartasMarcadas[0].querySelector('.tras').classList.add('escondido');
    cartasMarcadas[1].querySelector('.tras').classList.add('escondido');
    cartasMarcadas[0].querySelector('.frente').classList.remove('escondido');
    cartasMarcadas[1].querySelector('.frente').classList.remove('escondido');
    cartasMarcadas[0].classList.remove('marcada');
    cartasMarcadas[1].classList.remove('marcada');
    cartasMarcadas = document.querySelectorAll('.marcada');
}

function verificaJogada() {
    if (cartasMarcadas.length === 2) {
        if (cartasMarcadas[0].querySelector('.tras').querySelector('img').src === cartasMarcadas[1].querySelector('.tras').querySelector('img').src) {
            cartasMarcadas[0].classList.add('certa');
            cartasMarcadas[1].classList.add('certa');
            cartasMarcadas[0].classList.remove('marcada');
            cartasMarcadas[1].classList.remove('marcada');
            cartasMarcadas = document.querySelectorAll('.marcada');
            console.log('Você acertou');
            cartasCertas = document.querySelectorAll('.certa');
            if (cartasCertas.length === quantidadeCartas) {
                setTimeout(finalizaJogo, 1000);
            }
        } else {
            setTimeout(desvirarCartas,1000);
        }
    }
}

function finalizaJogo() {
    alert(`Você ganhou em ${contador} jogadas`);
}

function game() {
    perguntaQuantidadeCartas();
    criaCartasPartida();
    adicionaCarta();
}

game()