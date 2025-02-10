
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

let cardJogador = document.querySelector('.cardJogador');
let botaoEnviarNomePlayer = document.querySelector('.enviarNome');

let nomePlayer = document.querySelector('.inputNomePlayer');
botaoEnviarNomePlayer.addEventListener('click', ()=>{
    if(nomePlayer.value.trim() !== ''){
        fontGhosts.classList.add('mostrar')
        cardJogador.classList.remove('aparecer');
        cardResposta.style.display='block';
    }if(!intervalo){
        intervalo = setInterval(tempo, 1000);
    }else{
        alert('por favor preencha o campo');
    }
});


let btnSim = document.querySelector('.btnSim');
btnSim.addEventListener('click', ()=>{
    cardPergunta.style.display= 'none';
    cardJogador.classList.add('aparecer');
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

btnEnviarResposta.addEventListener('click', verificarResposta);

respostaJogador.addEventListener('keydown', (event)=>{
    if(event.key==='Enter'){
        verificarResposta()
    }
})

function verificarResposta(){
    let respotaJogadorEnviada = respostaJogador.value;
    let resultado = document.querySelector('.resultado');
    let mensagemVencedor = document.querySelector('.mensagemVencedor');
    if(respotaJogadorEnviada ==='17'){
        resultado.style.display='block'
        mensagemVencedor.innerHTML= `parabens ${nomePlayer.value}`;
        clearInterval(intervalo);
        btnEnviarResposta.classList.add('sumirGhosts')
    }else{
        fontGhosts.classList.add('sumirGhosts');
        resultadoResposta.innerHTML='Erro detectado! Recalculando sua inteligência... 📉😂'

        setTimeout(() => {
            resultadoResposta.innerHTML = "";
        }, 3000);
    }
}


