x=0, y=0;
let img;
function preload(){
    img = loadImage('m.png');
}
function setup() {
 canvas = createCanvas(300,300);
 canvas.position(550,300);   
 webcam = createCapture(VIDEO);
 webcam.size(300,300);
 webcam.hide() ;
 posenet = ml5.poseNet(webcam, modelLoad);
 posenet.on('pose', gotPoses);
}
function draw() {
    image(webcam, 0,0, 300,300);
}
 function modelLoad() {
    console.log('Modelo Certinho');
 }
 function gotPoses(results) {
    if (results.lenght > 0) {
        console.log(results);
        x = results[0].pose.nose.x;
        y = results[0].pose.nose.y;
        image(img, x, y)
    }
 }