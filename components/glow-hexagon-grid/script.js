var canvas=document.getElementsByTagName("canvas")[0];
var brush=canvas.getContext('2d');

canvas.width=window.innerWidth;
canvas.height=window.innerHeight;


function drawHexagon(x,y,a,color){
	var h=a*Math.sqrt(3)/2;
	brush.beginPath();
	brush.moveTo(x,y-a);
	brush.lineTo(x+h,y-a/2);
	brush.lineTo(x+h,y+a/2);
	brush.lineTo(x,y+a);
	brush.lineTo(x-h,y+a/2);
	brush.lineTo(x-h,y-a/2);
	brush.closePath();
	if(color==undefined)color="#313131";
	brush.fillStyle=color;
	brush.fill();
}

for(var i=0;i<100;i++){
	for(var j=0;j<100;j++){
		var a=30;
		drawHexagon(i*2*a,j*2*a,a);
	}
}