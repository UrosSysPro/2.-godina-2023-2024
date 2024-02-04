var body=document.body;
var konzola=document.getElementById("console");
var draggable=document.getElementsByClassName("draggable")[0];

var draggableClicked=false;

body.addEventListener("mousemove",mousemove);

body.addEventListener("keydown",keydown);
body.addEventListener("keyup",keyup);

draggable.addEventListener("mousedown",mousedown);
draggable.addEventListener("mouseup",mouseup);

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
        button.style.backgroundColor="#0fa";
    }
}
function keydown(event){
    var id=`key-${event.key}`;
    var button=document.getElementById(id);
    if(button){
        button.style.backgroundColor="#a0f";
    }
}