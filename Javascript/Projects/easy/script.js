const playButton = document.getElementById('play-button');
const pauseButton = document.getElementById('pause-button');
const stopButton = document.getElementById('stop-button');
const textInput = document.getElementById('text');
const speedInput = document.getElementById('speed');

let utterance = new SpeechSynthesisUtterance(); // Initialize the utterance object

playButton.addEventListener('click', () => {
    playText(textInput.value);
});

pauseButton.addEventListener('click', () => {
    pauseSpeech();
});

stopButton.addEventListener('click', () => {
    stopSpeech();
});

function playText(text) {
    if (speechSynthesis.paused || speechSynthesis.speaking) {
        speechSynthesis.resume(); // If paused, resume speech synthesis
    } 

    utterance.text = text;
    utterance.rate = speedInput.value || 1; // Get value if not is 1

    utterance.addEventListener('end', () => {
        textInput.disabled = false
    })
    textInput.disabled = true
    speechSynthesis.speak(utterance); // Start speaking the utterance
    
}

function pauseSpeech() {
    if (speechSynthesis.speaking) {
        speechSynthesis.pause();
    }
}

function stopSpeech() {
    speechSynthesis.resume()
    speechSynthesis.cancel();
    // Reset the utterance object
}
