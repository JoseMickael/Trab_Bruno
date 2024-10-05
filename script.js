let botaoCorreto = Math.floor(Math.random() * 5);

function verificarResposta(botaoEscolhido) {
    const resultado = document.getElementById('resultado');
    
    if (botaoEscolhido === botaoCorreto) {
        resultado.innerHTML = 'Parabéns! Você escolheu o botão correto!';
        resultado.style.color = 'green';
    } else {
        resultado.innerHTML = 'Que pena! Você escolheu o botão errado. Tente novamente!';
        resultado.style.color = 'red';
    }
}