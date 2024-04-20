var canvas=document.getElementsByTagName('canvas')[0];
var brush=canvas.getContext('2d');
var pixelSize=20;

var palete=[
	'black',
	'white',
	'red',
	'green',
	'blue',
	'purple',
	'#00ef7f',
	'#aeef22',
];


canvas.width=500;
canvas.height=500;

var painting=[];
var width=Math.floor(canvas.width/pixelSize);
var height=Math.floor(canvas.height/pixelSize);
for(var i=0;i<width;i++){
	painting.push([]);
	for(var j=0;j<height;j++){
		painting[i].push(1);
	}
}

var selectedColor=0;

function drawRectangle(x,y,width,height,color){
	brush.beginPath();
	brush.rect(x,y,width,height);
	brush.fillStyle=color;
	brush.fill();
}

function drawPainting(){
	for(var i=0;i<width;i++){
		for(var j=0;j<height;j++){
			var colorId=painting[i][j];
			var color=palete[colorId];
			drawRectangle(i*pixelSize,j*pixelSize,pixelSize,pixelSize,color);
		}
	}
}
canvas.addEventListener('click',click);
function click(event){
	console.log("click",event);
	var x=Math.floor(event.x/pixelSize);
	var y=Math.floor(event.y/pixelSize);
	painting[x][y]=selectedColor;
	drawPainting();
}

drawPainting();