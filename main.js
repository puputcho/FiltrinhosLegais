function preload(){
    
}
function setup() {
 canvas = createCanvas(300,300);
 canvas.center();   
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
        console.log('noseX = ' + results[0].pose.leftEye.x);
        console.log('noseY = ' + results[0].pose.leftEye.y);

    }
    else{
        console.error('Algo de errado não está certo...');
    }
 }