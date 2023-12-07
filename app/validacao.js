function verificarSeOChuteEValido(chute) {
    const numero = +chute

    if (chuteInvalido(numero)) {
        if (chute.toUpperCase() === 'GAME OVER') {
            document.body.innerHTML = `<h1> Gamer Over</h1>
            <button id="jogar_novamente" class='btn_jogaNovamente'>Jogar Novamente</button>
            `
            document.body.style.backgroundColor = 'black';

        } else {
            elementoChute.innerHTML += '<div>Valor inválido</div>'
        }
    }

    if (chuteMaiorOuMenorPermitido(numero)) {
        elementoChute.innerHTML += `<div>Valor inválido! Número deve estar entre ${minValor} e ${maxValor}.</div>`
        return
    }

    if (numero === numeroSecreto) {
        document.body.innerHTML = `
        <h1 class='acertou'>PARABÉNS! VOCÊ ACERTOU!</h1>
    <h3 class="mensagem_acertou">Numero secreto era </h3>
    <span class="box_venceu">${numeroSecreto}</span>
    <button id="jogar_novamente" class='btn_jogaNovamente'>Jogar Novamente</button>`
    }
    else if (numero > numeroSecreto) {
        elementoChute.innerHTML += '<div>O número secreto é menor <i class="fa-solid fa-angles-down"></i></div>'
    } else {
        elementoChute.innerHTML += '<div>O número secreto é maior <i class="fa-solid fa-angles-up"></i></div>'
    }
}

function chuteInvalido(numero) {
    return Number.isNaN(numero)
}

function chuteMaiorOuMenorPermitido(numero) {
    return (numero > maxValor || numero < minValor)
}

document.body.addEventListener('click', evento => {
    if (evento.target.id == 'jogar_novamente') {
        window.location.reload()
    }
})