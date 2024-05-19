var canvas=document.getElementsByTagName("canvas")[0];
var brush=canvas.getContext("2d");

canvas.width=500;
canvas.height=500;

var players=[];
var up=false,down=false,left=false,right=false;
var ws=new WebSocket("ws://localhost:3000");
ws.onmessage=function(message){
    players=JSON.parse(message.data);
}

document.body.addEventListener("keydown",keyDown);
document.body.addEventListener("keyup",keyUp);

function keyDown(e){
    if(e.key=="ArrowUp")up=true;
    if(e.key=="ArrowDown")down=true;
    if(e.key=="ArrowLeft")left=true;
    if(e.key=="ArrowRight")right=true;
}

function keyUp(e){
    if(e.key=="ArrowUp")up=false;
    if(e.key=="ArrowDown")down=false;
    if(e.key=="ArrowLeft")left=false;
    if(e.key=="ArrowRight")right=false;
}

setInterval(() => {
    brush.beginPath()
    brush.rect(0,0,500,500);
    brush.fillStyle="rgba(255,255,255,0.1)";
    brush.fill();
    for(var i=0;i<players.length;i++){
        
        var x=players[i].x;
        var y=players[i].y;
        var vx=players[i].vx;
        var vy=players[i].vy;
        var angle=Math.atan2(vy,vx);
        brush.translate(x,y);
        brush.rotate(angle);

        brush.beginPath();
        brush.moveTo(20,0);
        brush.lineTo(-10,20);
        brush.lineTo(0,0);
        brush.lineTo(-10,-20);
        brush.closePath();
        brush.fillStyle="black";
        brush.strokeStyle="crimson";
        brush.lineWidth=3;
        brush.lineCap="round";
        brush.fill();
        brush.stroke();

        brush.rotate(-angle);
        brush.translate(-x,-y);
    }
    ws.send(JSON.stringify({left,right,up,down}));
}, 16);