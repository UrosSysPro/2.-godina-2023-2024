var canvas=document.getElementsByTagName("canvas")[0];


canvas.width=canvas.clientWidth;
canvas.height=canvas.clientHeight;

var brush=canvas.getContext("2d");

brush.fillStyle="orange";
brush.strokeStyle="orange";
brush.lineWidth=10;
brush.lineCap="round";

var isMouseDown=false;
var oldX=0;
var oldY=0;

function mouseDown(){

    brush.beginPath();
    isMouseDown=true;
}
function mouseMove(e){
    var x=e.clientX;
    var y=e.clientY;
    if(isMouseDown){
        brush.moveTo(oldX,oldY);
        brush.lineTo(x,y);
        brush.stroke();
    }
    oldX=x;
    oldY=y;
}
function mouseUp(){
    // brush.closePath()
    isMouseDown=false;
}
function changeColor(color){
    brush.strokeStyle=color;
}

function clear(){
    console.log("clear");
    brush.fillStyle="#ffffff";
    brush.rect(0,0,canvas.width,canvas.height);
    brush.fill();
}

function fade(){
    brush.beginPath();
    brush.fillStyle="rgba(255,255,255,0.05)";
    brush.rect(0,0,canvas.width,canvas.height);
    brush.fill();
}

// setInterval(fade,1000/60);