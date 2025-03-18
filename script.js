document.addEventListener("DOMContentLoaded", () => {
    const audioPlayer = document.getElementById("audioPlayer");

    // set volume
    audioPlayer.volume = 0.8; 

    // Try to play the audio automatically when the DOM is loaded
    audioPlayer.play().then(() => {
        // Audio is playing, do nothing
    }).catch(err => {
        console.log("Error playing audio: ", err);
        // Audio could not play automatically due to restrictions, give user a button to play
        playButton.style.display = "block"; // Show play button if audio doesn't play automatically
    });

    playButton.addEventListener("click", () => {
        if (audioPlayer.paused) {
            audioPlayer.play();  // Play audio when clicked
            playButton.style.display = "none"; // Hide button after play
        } else {
            audioPlayer.pause(); // Pause audio when clicked again
            playButton.style.display = "block"; // Show button if paused
        }
    });
});