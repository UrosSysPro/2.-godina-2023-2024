var canvas=document.getElementsByTagName("canvas")[0];
canvas.width=canvas.clientWidth*4;
canvas.height=canvas.clientHeight*4;

var brush=canvas.getContext("2d");

brush.fillStyle="#fff";
brush.rect(0,0,canvas.width,canvas.height);
brush.fill();

//putanja
brush.beginPath();
brush.rect(200,100,300,400);
//podesavanja
brush.fillStyle="#3ae";
brush.lineWidth=10;
brush.strokeStyle="#da3"
//sta se radi sa tom putanjom
brush.fill();
brush.stroke();

brush.beginPath();
brush.ellipse(500,500,100,100,0,0,2*Math.PI);
brush.fill();
brush.stroke();

var imageData=brush.getImageData(0,0,canvas.width,canvas.height);


setInterval(() => {
    for(let i=0;i<100;i++){
        var x=Math.floor(Math.random()*canvas.width);
        var y=Math.floor(Math.random()*canvas.height);
        var color=getPixel(imageData,x,y);
        brush.beginPath();
        brush.fillStyle=`rgb(${color.r},${color.g},${color.b})`;
        brush.ellipse(x,y,4,4,0,0,2*Math.PI);
        brush.fill();
    }
}, 1000/60);

function getPixel(imageData,x,y){
    if(x<0)x=0;
    if(y<0)y=0;
    if(x>imageData.width-1)x=imageData.width-1;
    if(y>imageData.height-1)y=imageData.height-1;
    let index=(x+imageData.width*y)*4;
    let r=imageData.data[index+0];
    let g=imageData.data[index+1];
    let b=imageData.data[index+2];
    return {r,g,b};
}