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
		var x=a*Math.sqrt(3)*i;
		if(j%2==0)x+=a*Math.sqrt(3)/2
		var y=1.5*a*j;
		var padding=3;
		drawHexagon(x,y,a-padding);
	}
}

function mousemove(e){
	console.log("mousemove");
	var div=document.getElementById("glow");
	div.style.top=e.y+"px";
	div.style.left=e.x+"px";
}