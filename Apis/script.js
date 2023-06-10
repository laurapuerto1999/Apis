/**const videoInput = documet.getElementById('videoInput');
const ejecutar = document.getElementById('ejecutar');
const pausar = document.getElementById('pausar');
const volumen = ducument.getElementById('volumen');
const mensaje= document.getElementById('mensaje');


ejecutar.addEventListener('click',() => {
    videoInput.ejecutar();
});


pausar.addEventListener('click',() => {
    videoInput.pausar();
});


volumen.addEventListener('input',() => {
    videoInput.volumen() = volumen.value;
});


videoInput.addEventListener('loadedmetadata', () => {
    loadingMsg.style.display = 'none';
});


videoInput.addEventListener('error', () => {
    alert('error de carga');
});

function loadVideo(file){
    if(!file.type.match('video/mp4')){
    alert('No se encuentra archivo con formato acceptado');
    return;
    }

    const fileUrl = URL.createObjectURL(file);
    videoInput.src = fileUrl;
    mensaje.style.display = 'block';

    videoInput.addEventListener('canplaythrough', () =>{
        mensaje.style.display ='none';
        videoInput.play();
    },{once: true});
}


let videoPlayer;
let videoInput;
let loadingMessage;
let playButton;
let pauseButton;
let volumeControl;

window.onload = function() {
    videoPlayer = document.getElementById('videoPlayer');
    videoInput = document.getElementById('videoInput');
    loadingMessage = document.getElementById('loadingMessage');
    playButton = document.getElementById('playButton');
    pauseButton = document.getElementById('pauseButton');
    volumeControl = document.getElementById('volumeControl');
} */

let videoPlayer;
let videoInput;
let loadingMessage;
let playButton;
let pauseButton;
let volumeUp;
let volumeDown;

const volumeChange = 0.1;

window.onload = function() {
    videoPlayer = document.getElementById('videoPlayer');
    videoInput = document.getElementById('videoInput');
    loadingMessage = document.getElementById('loadingMessage');
    playButton = document.getElementById('playButton');
    pauseButton = document.getElementById('pauseButton');
    volumeUp = document.getElementById('volumeUp');
    volumeDown = document.getElementById('volumeDown');
}

function loadVideo(event) {
    let file = event.target.files[0];
    let fileType = file["type"];
    
    if (fileType && fileType.startsWith('video')) {
        loadingMessage.style.display = 'block'; // Muestra el mensaje de carga cuando se inicia la carga
        setTimeout(function() {
            let fileURL = URL.createObjectURL(file);
            videoPlayer.src = fileURL;
            videoPlayer.onloadeddata = function() {
                videoPlayer.style.display = 'block';
                playButton.style.display = 'inline-block';
                pauseButton.style.display = 'inline-block';
                volumeUp.style.display = 'inline-block';
                volumeDown.style.display = 'inline-block';
                loadingMessage.style.display = 'none'; // Oculta el mensaje de carga cuando se completa la carga
            }
        }, 2000); // Se forza un retraso de 2 segundos
    } else {
        alert("Por favor, carga un archivo de video válido.");
    }
}



videoPlayer.onwaiting = function() {
    loadingMessage.style.display = 'block';
};

videoPlayer.oncanplay = function() {
    loadingMessage.style.display = 'none';
};

function playVideo() {
    videoPlayer.play();
}

function pauseVideo() {
    videoPlayer.pause();
}

function increaseVolume() {
    if(videoPlayer.volume + volumeChange <= 1) {
        videoPlayer.volume += volumeChange;
    } else {
        videoPlayer.volume = 1;
    }
}

function decreaseVolume() {
    if(videoPlayer.volume - volumeChange >= 0) {
        videoPlayer.volume -= volumeChange;
    } else {
        videoPlayer.volume = 0;
    }
}
