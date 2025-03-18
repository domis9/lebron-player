document.addEventListener("DOMContentLoaded", () => {
    const audioPlayer = document.getElementById("audioPlayer");

    // set volume
    audioPlayer.volume = 0.8; 

    setTimeout(() => {
        audioPlayer.muted = false;  // Unmute after 1 second
    }, 1000);  // Adjust the timeout if necessary for different browsers
});