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


var selectedColor=3;
var selectedTool=0;
var startX=0;
var startY=0;
var isMouseDown=false;

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
function mouseDown(event){
	isMouseDown=true;
	var x=Math.floor(event.x/pixelSize);
	var y=Math.floor(event.y/pixelSize);
	startX=x;
	startY=y;
	// //pen
	if(selectedTool==0){
		painting[x][y]=selectedColor;
	}
	if(selectedTool==1){
		fill(x,y,painting[x][y],selectedColor);
	}
	if(selectedTool==3)painting[x][y]=1;
	drawPainting();
}
function mouseMove(event){
	var x=Math.floor(event.x/pixelSize);
	var y=Math.floor(event.y/pixelSize);
	//pen
	if(selectedTool==0&&isMouseDown){
		painting[x][y]=selectedColor;
	}
	if(selectedTool==3&&isMouseDown)painting[x][y]=1;
	drawPainting();
	if(selectedTool==2&&isMouseDown){
		for(var i=Math.min(x,startX);i<Math.max(x,startX);i++)
			for(var j=Math.min(y,startY);j<Math.max(y,startY);j++)
				drawRectangle(i*pixelSize,j*pixelSize,pixelSize,pixelSize,palete[selectedColor]);
	
	}
}
function mouseUp(event){
	isMouseDown=false;
	var x=Math.floor(event.x/pixelSize);
	var y=Math.floor(event.y/pixelSize);
	//pen
	if(selectedTool==0){
		painting[x][y]=selectedColor;
	}
	if(selectedTool==2){
		console.log(startX,startY,x,y);
		for(var i=Math.min(x,startX);i<Math.max(x,startX);i++)
			for(var j=Math.min(y,startY);j<Math.max(y,startY);j++)painting[i][j]=selectedColor;
	}
	if(selectedTool==3)painting[x][y]=1;
	drawPainting();
}
canvas.addEventListener('mousedown',mouseDown);
canvas.addEventListener('mousemove',mouseMove);
canvas.addEventListener('mouseup',mouseUp);

function selectTool(index){
	selectedTool=index;
	console.log(index);
}


function fill(x,y,replaceColor,fillColor){
	if(x>=width||x<0||y>=height||y<0||replaceColor==fillColor||painting[x][y]!=replaceColor||painting[x][y]==fillColor)return;
	painting[x][y]=fillColor;
	fill(x-1,y,replaceColor,fillColor);
	fill(x+1,y,replaceColor,fillColor);
	fill(x,y-1,replaceColor,fillColor);
	fill(x,y+1,replaceColor,fillColor);
}