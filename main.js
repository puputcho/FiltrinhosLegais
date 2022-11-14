function preload(){
    
}
function setup() {
 canvas = createCanvas(300,300);
 canvas.center();   
 webcam = createCapture(VIDEO);
 webcam.size(300,300);
 webcam.hide() ;
}
function draw() {
    image(webcam, 0,0, 300,300);
}
function tirarFoto() {
    
}