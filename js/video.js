var miVideo = document.getElementById("rvideo");
function playPause(){
    if(miVideo.paused)
        miVideo.play();
    else
        miVideo.pause();
}

function stop(){
    miVideo.pause();
    miVideo.currentTime = 0;
}

function skip(value) {
    miVideo.currentTime += value; 
    
}

function setVolume(value) {
    miVideo.volume = Math.max(0, Math.min(1, miVideo.volume + value)); 
}

function toggleFullscreen() {
    if (miVideo.requestFullscreen) {
        miVideo.requestFullscreen();
    } else if (miVideo.webkitRequestFullscreen) { 
        miVideo.webkitRequestFullscreen();
    }
}




