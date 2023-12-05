function verificarSeOChuteEValido(chute) {
    const numero = +chute

    if (chuteInvalido(numero)) {
        elementoChute.innerHTML += '<div>Valor inválido</div>'
        return
    }

    if (chuteMaiorOuMenorPermitido(numero)) {
        elementoChute.innerHTML += `<div>Valor inválido! Número deve estar entre ${minValor} e ${maxValor}.</div>`
        return
    }

    if (numero === numeroSecreto) {
        document.body.innerHTML = `
        <h1 class = 'acertou'>PARABÉNS VOCÊ ACERTOU!</h1>
        <h3>Numero secreto era </h3>
    <span class = "box">${numeroSecreto}<span>`
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