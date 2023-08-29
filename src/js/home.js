const playbtn = document.querySelector('#home-play-button');
const modalVideo = document.querySelector('#modal-video-bondi');
const crossIcon = document.querySelector(".cross-icon");
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

crossIcon.addEventListener('click', function(event) {
    modalVideo.style.display = "none";
    videoElement.pause();
})