// var audio = document.createElement('audio');
// audio.setAttribute('src', 'sound.mp3');
// audio.loop = true
// audio.play();



var audio = document.createElement('audio');
audio.setAttribute('src', 'sound.mp3');
audio.loop = true;

var isPlaying = false; // Track audio state

document.addEventListener('click', function() {
    if (isPlaying) {
        audio.pause();  // Stop the audio
    } else {
        audio.play();   // Play the audio
    }
    isPlaying = !isPlaying; // Toggle state
});