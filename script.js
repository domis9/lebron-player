document.addEventListener("DOMContentLoaded", () => {
    const audioPlayer = document.getElementById("audioPlayer");

    // set volume
    audioPlayer.volume = 0.8; 

    playButton.addEventListener("click", () => {
        // Toggle mute status
        audioPlayer.muted = !audioPlayer.muted;
        
        // Optionally, update the button text to reflect the action
        if (audioPlayer.muted) {
            playButton.textContent = "Unmute Audio";
        } else {
            playButton.textContent = "Mute Audio";
        }
    });
});