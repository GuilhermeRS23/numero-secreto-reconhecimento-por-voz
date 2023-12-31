const elementoChute = document.getElementById('chute');

window.SpeechRecognition = window.SpeechRecognition || window.webkitSpeechRecognition;

const recognition = new SpeechRecognition();
recognition.lang = 'pt-br'
recognition.start()

recognition.addEventListener('result', onSpeak)

function onSpeak (event) {
    chute = (event.results[0][0].transcript).replace(".", '');
    console.log(chute)
    exibirChuteNaTela(chute)
    verificarSeOChuteEValido(chute)
}

function exibirChuteNaTela(chute) {
    elementoChute.innerHTML = `
    <div>Você disse: </div>
    <span class = "box">${chute}<span>`
}

recognition.addEventListener('end', () => recognition.start())
