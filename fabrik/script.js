console.log("hello");

var canvas=document.getElementsByTagName('canvas')[0];
var brush=canvas.getContext('2d');

canvas.width=500;
canvas.height=500;

function line(x1,y1,x2,y2){
    brush.beginPath();
    brush.moveTo(x1,y1);
    brush.lineTo(x2,y2);
    brush.strokeStyle='#111';
    brush.stroke();
}

function circle(x,y,r){
    if(r==undefined)r=4;
    brush.beginPath();
    brush.arc(x,y,r,0,2*Math.PI);
    brush.fillStyle='#1B8';
    brush.fill();
}

function drawPoints(points){
    for(var i=0;i<points.length-1;i++){
        line(
            points[i].x,
            points[i].y,
            points[i+1].x,
            points[i+1].y
        );
    }
    for(var i=0;i<points.length;i++){
        circle(
            points[i].x,
            points[i].y
        );
    }
}

function fabrik(points,lengths,target){
    //backward
    points[points.length-1].x=target.x;
    points[points.length-1].y=target.y;

    for(var i=points.length-2;i>=0;i--){
        var v={
            x:points[i].x-points[i+1].x,
            y:points[i].y-points[i+1].y,
        };
        
        var intensity=Math.sqrt(v.x*v.x+v.y*v.y);
        v.x=v.x/intensity*lengths[i];
        v.y=v.y/intensity*lengths[i];

        points[i].x=points[i+1].x+v.x;
        points[i].y=points[i+1].y+v.y;
    }
    //forward
    points[0].x=250;
    points[0].y=250;
    for(var i=1;i<points.length;i++){
        var v={
            x:points[i].x-points[i-1].x,
            y:points[i].y-points[i-1].y,
        };
        
        var intensity=Math.sqrt(v.x*v.x+v.y*v.y);
        v.x=v.x/intensity*lengths[i];
        v.y=v.y/intensity*lengths[i];

        points[i].x=points[i-1].x+v.x;
        points[i].y=points[i-1].y+v.y;
    }
}

function mousemove(e){

    for(var i=0;i<10;i++)fabrik(points,lengths,e);

    brush.clearRect(0,0,500,500);
    drawPoints(points);
}

var points=[
    {x:250,y:250},
    {x:300,y:250},
    {x:350,y:250},
    {x:400,y:250},
    {x:400,y:250},
    {x:400,y:250},
    {x:400,y:250},
    {x:400,y:250},
    {x:400,y:250},
];
var lengths=[50,50,50,50,50,50,50,50,50,50,50,50];

drawPoints(points);
