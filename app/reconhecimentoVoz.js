const SpeechRecognition =
  window.SpeechRecognition || window.webkitSpeechRecognition;

  const recognition = new SpeechRecognition()
  recognition.lang = 'pt-br'
  recognition.star()

  recognition.addEventListener('result, oneSpeak')

  function oneSpeak(e) {
    console.log(e.result[0] [0].transcript)
  }