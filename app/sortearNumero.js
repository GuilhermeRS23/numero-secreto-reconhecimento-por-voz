const elementoMinValor = document.getElementById('min-valor');
const elementoMaxValor = document.getElementById('max-valor');

let minValor = 1;
let maxValor = 1000;
const numeroSecreto = gerarNumeroSecreto()

function gerarNumeroSecreto() {
    return parseInt(Math.random() * maxValor + 1)
}

console.log("Numero Secreto: " + numeroSecreto)

elementoMaxValor.innerHTML  = maxValor;
elementoMinValor.innerHTML = minValor;
