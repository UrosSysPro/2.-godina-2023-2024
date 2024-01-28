var canvas=document.getElementsByTagName("canvas")[0];

canvas.width=canvas.clientWidth;
canvas.height=canvas.clientHeight;

var brush=canvas.getContext("2d");

var headSize=50;
var armWidth=30;
var body=100;

brush.fillStyle="#5addaf";

brush.beginPath();
brush.rect(armWidth,0,headSize,headSize);
brush.fill();


brush.beginPath();
brush.rect(0,headSize,armWidth,body);
brush.fill();


brush.beginPath();
brush.rect(armWidth+headSize,headSize,armWidth,body);
brush.fill();


brush.beginPath();
brush.fillStyle="#5aafdd";
brush.rect(armWidth,headSize,headSize,body);
brush.fill();


brush.beginPath();
brush.fillStyle="#af5add";
brush.rect(armWidth,headSize+body,headSize/2,body);
brush.fill();


brush.beginPath();
brush.fillStyle="#afdd5a";
brush.rect(armWidth+headSize/2,headSize+body,headSize/2,body);
brush.fill();