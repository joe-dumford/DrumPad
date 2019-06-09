function playSound(e) {
    const audio = document.querySelector(`audio[data-key="${e.keyCode}"]`);
    const key = document.querySelector(`div[data-key="${e.keyCode}"]`);
    if (!audio) return; //Stops function from running if no audio attached to key
    key.classList.add('playing');
    audio.currentTime = 0; //rewinds audio to beginning if button hit repeatedly
    audio.play();
}

function removeTransition(e) {
    if (e.propertyName !== 'transform') return; //Skip if it's not a transform
    e.target.classList.remove('playing');
}

const keys = Array.from (document.querySelectorAll('.key'));
keys.forEach(key => key.addEventListener('transitionend', removeTransition));
window.addEventListener('keydown', playSound);




