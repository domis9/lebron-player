document.addEventListener("DOMContentLoaded", () => {
    const audioPlayer = document.getElementById("audioPlayer");


    audioPlayer.volume = 0.8; 

    // try to play the audio automatically when the DOM is loaded
    audioPlayer.play().then(() => {

    }).catch(err => {
        console.log("Error playing audio: ", err);

        playButton.style.display = "block"; 
    });

    playButton.addEventListener("click", () => {
        if (audioPlayer.paused) {
            audioPlayer.play();  
            playButton.style.display = "none"; 
        } else {
            audioPlayer.pause(); 
            playButton.style.display = "block"; 
        }
    });
});