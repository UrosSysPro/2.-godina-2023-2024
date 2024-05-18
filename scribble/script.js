var canvas=document.getElementsByTagName("canvas")[0];
var brush=canvas.getContext("2d");

canvas.width=500;
canvas.height=500;

var px,py;
var isMouseDown=false;
var color="black";
var lineWidth=4;

var ws=new WebSocket("ws://192.168.248.134:3000");
ws.onopen=function(){
    console.log("cennected to server");
    ws.send("hello from client");
}
ws.onmessage=function(message){
    var data=message.data.split(" ");
    var x=parseInt(data[0]);
    var y=parseInt(data[1]);
    var px=parseInt(data[2]);
    var py=parseInt(data[3]);
    var color=data[4];
    var width=parseInt(data[5]);
    line(x,y,px,py,color,width);
}
ws.onclose=function(){
    console.log("server disconnected");
}

canvas.addEventListener("mousedown",mouseDown);
canvas.addEventListener("mouseup",mouseUp);
canvas.addEventListener("mousemove",mouseMove);

function mouseDown(e){
    isMouseDown=true;
}

function mouseUp(e){
    isMouseDown=false;
}

function mouseMove(e){
    var x=e.layerX;
    var y=e.layerY;

    if(isMouseDown){
        line(x,y,px,py,color,lineWidth);
        ws.send(`${x} ${y} ${px} ${py} ${color} ${lineWidth}`);
    }

    px=x;
    py=y;
}

function line(x,y,px,py,color,width){
    brush.beginPath();
    brush.moveTo(x,y);
    brush.lineTo(px,py);
    brush.strokeStyle=color;
    brush.lineCap="round";
    brush.lineWidth=width;
    brush.stroke()
}

function setLineWidth(width){
    lineWidth=width;
}
function setColor(c){
    color=c;
}
