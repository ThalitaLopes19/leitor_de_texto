const textarea = document.getElementById('text');
const button = document.getElementById('btn');

button.addEventListener('click', () => {
    const text = textarea.value;
    const voice = new SpeechSynthesisUtterance(text);
    voice.lang = 'pt-BR';
    window.speechSynthesis.speak(voice);
});