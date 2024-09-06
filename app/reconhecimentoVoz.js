const SpeechRecognition =
  window.SpeechRecognition || window.webkitSpeechRecognition;

const chute = document.getElementById('chute')

  const recognition = new SpeechRecognition()
  recognition.lang = 'pt-br'
  recognition.star()

  recognition.addEventListener('result, oneSpeak')

  function oneSpeak(e) {
    chute = (e.result[0] [0].transcript)
    exibeChuteNaTela(chute)
  }

  function exibeChuteNaTela(chute){
    elementoChute.imentHTML = `
    <div>Você disse:</div>
    <span class="box"> ${chute} </span>
    `
  }