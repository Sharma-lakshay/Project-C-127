song= "";
song2= "";

function preload(){
song= loadSound("Attention - Charlie Puth.mp3");
song2= loadSound("Camila Cabello ‒ Havana 🎤 ft. Young Thug.mp3");
}

function setup(){
    canvas= createCanvas(600, 500);
    canvas.center();

    video= createCapture(VIDEO);
    video.hide();
}

function draw(){
    image(video, 0, 0, 600, 500);
}
