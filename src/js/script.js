
const hoverElement = document.querySelector('.hover');

document.addEventListener('mousemove', event => {
    const x = event.clientX + 'px';
    const y = event.clientY + 'px';
    hoverElement.style.setProperty('--x', x);
    hoverElement.style.setProperty('--y', y);
});


const cardPergunta = document.querySelector('.card');
const cardResposta = document.querySelector('.card-resposta');

let ContEntradaResposta = document.querySelector('.conteudoEntradaResposta');
let fontGhosts = document.querySelector('.font');

let temporizador = document.querySelector('.contador');
let tempoAtual = 50;
let intervalo;
function tempo(){
    if(tempoAtual > 0){
    tempoAtual--;
    temporizador.innerHTML= tempoAtual;
    }else{
        clearInterval(intervalo);
        resultadoResposta.innerHTML='tempo esgotado'
        ContEntradaResposta.classList.add('sumirGhosts');
        fontGhosts.style.opacity = 0;
    }
}

let btnSim = document.querySelector('.btnSim');
btnSim.addEventListener('click', ()=>{
    fontGhosts.classList.add('mostrar');
    cardPergunta.style.display= 'none';
    cardResposta.style.display='block';
    if(!intervalo){
        intervalo = setInterval(tempo, 1000);
    }
});


let informacao = document.querySelector('.informacao');
let missao = document.querySelector('.missao');
let btnNao = document.querySelector('.btnNao');
btnNao.addEventListener('click', ()=>{
    btnSim.style.display='none';
    btnNao.style.display='none';
    missao.style.display='none';
    informacao.innerHTML='Ok! Mas aposto que seria divertido...';
});

let respostaJogador = document.getElementById('resposta');
let resultadoResposta = document.querySelector('.resultadoResposta');
let btnEnviarResposta = document.querySelector('.btnEnviarResposta');
btnEnviarResposta.addEventListener('click', ()=>{
    let respotaJogadorEnviada = respostaJogador.value;
    if(respotaJogadorEnviada ==='17'){
        resultadoResposta.innerHTML='Parabens jogador'
        clearInterval(intervalo);
        btnEnviarResposta.classList.add('sumirGhosts')
    }else{
        fontGhosts.classList.add('sumirGhosts');
        resultadoResposta.innerHTML='Erro detectado! Recalculando sua inteligência... 📉😂'

        setTimeout(() => {
            resultadoResposta.innerHTML = "";
        }, 3000);
    }
});


let palavra= 'começar o jogo? ';
let index= 0;

function efeitoPalavra(){
    informacao.innerHTML = palavra.substring(0, index)
    index++;
    if(index > palavra.length){
        index= 0;
    }
}

setInterval(efeitoPalavra, 500);

