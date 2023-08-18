const playbtn = document.querySelector('#home-play-button');
const modalVideo = document.querySelector('#modal-video-bondi');
const videoElement = modalVideo.querySelector('video');

playbtn.addEventListener('click', function(event) {
    modalVideo.style.display = "block";
    videoElement.play();
})

document.addEventListener('keydown', function(event) {
    if (event.key === "Escape") {
        modalVideo.style.display = "none";
        videoElement.pause();
    }
})