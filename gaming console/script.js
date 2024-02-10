var body=document.body;
var konzola=document.getElementById("console");
var draggable=document.getElementsByClassName("draggable")[0];

var draggableClicked=false;

body.addEventListener("mousemove",mousemove);

body.addEventListener("keydown",keydown);
body.addEventListener("keyup",keyup);

draggable.addEventListener("mousedown",mousedown);
draggable.addEventListener("mouseup",mouseup);

var canvas=document.getElementsByTagName("canvas")[0];
canvas.width=canvas.clientWidth;
canvas.height=canvas.clientHeight;
var brush=canvas.getContext("2d");
clear();

var image=new Image();
image.src="nyan.png"
var imageScale=3;
var imageWidth=image.width/imageScale;
var imageHeight=image.height/imageScale;
var x=0,y=canvas.height-imageHeight;
var up=false,down=false,right=false,left=false;
var vx=0,vy=0,g=0.1;
// brush.drawImage(image,100,100,imageWidth,imageHeight);


setInterval(() => {
    brush.beginPath();
    clear();
    update();
    draw();
}, 1000/60);

function update(){
    if(up){
        vy=-4;
        up=false
    }
    if(left){
        vx=-3;
    }
    if(right){
        vx=3;
    }

    vy+=g;
    x+=vx;
    y+=vy;
    if(x>canvas.width-imageWidth){
        x=canvas.width-imageWidth;
    }
    if(x<0){
        x=0;
    }
    if(y>canvas.height-imageHeight){
        y=canvas.height-imageHeight;
        vy=0;
    }
    if(y<0){
        y=0;
        vy=0;
    }
}
function draw(){
    brush.drawImage(image,x,y,imageWidth,imageHeight);
}

function clear(){
    brush.fillStyle="#fff";
    brush.rect(0,0,canvas.width,canvas.height);
    brush.fill();
}

function mousemove(event){
    var x=event.clientX;
    var y=event.clientY;
    if(draggableClicked){
        draggable.style.top=`${y-50}px`;
        draggable.style.left=`${x-50}px`;
    }
}


function mousedown(event){
    draggableClicked=true;
}

function mouseup(event){
    draggableClicked=false;
}

function keyup(event){
    var id=`key-${event.key}`;
    var button=document.getElementById(id);
    if(button){
        button.style.backgroundColor="black";
    }
    if(event.key=='a')left=false;
    if(event.key=='d')right=false;
    if(event.key=='w')up=false;
    if(event.key=='s')down=false;
}
function keydown(event){
    var id=`key-${event.key}`;
    var button=document.getElementById(id);
    if(button){
        button.style.backgroundColor="#515151";
    }
    if(event.key=='a')left=true;
    if(event.key=='d')right=true;
    if(event.key=='w')up=true;
    if(event.key=='s')down=true;
}