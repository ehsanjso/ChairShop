// the screen
monitor = document.querySelector('.tv-window');
// the video element
video = monitor.querySelector('video');
// play video control
playCtrl = monitor.querySelector('button.action--play');

// play video
playCtrl.addEventListener('click', videoPlay);
// ended video event
video.addEventListener('ended', videoLoad);

function videoPlay() {
// hide the play control
classie.remove(playCtrl, 'action--shown');
video.currentTime = 0;
video.play();
}

function videoLoad() {
// show the play control
classie.add(playCtrl, 'action--shown');
video.load();
}
