function desligar(){
    let div = document.getElementById("stylo")
    div.style.visibility = 'hidden'

    let video = document.getElementById("stylo")
    video.pause();
    video.currentTime = 0;

}

function canal1(){
    let div = document.getElementById("stylo")
    div.style.visibility = 'visible'

    let video = document.getElementById("stylo")
    video.play()

}