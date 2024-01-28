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

for(var i=300;i<600;i++){
    for(var j=300;j<600;j++){
        var color=average(imageData,i,j);
        setPixel(imageData,i,j,color);
    }
}

brush.putImageData(imageData,0,0);

function average(imageData,x,y){
    var size=51;
    var half=Math.floor(size/2);
    var square=size*size;
    var r=0,b=0,g=0;
    for(var i=-half;i<=half;i++){
        for(var j=-half;j<=half;j++){
            var color=getPixel(imageData,x+i,y+j);
            r+=color.r;
            g+=color.g;
            b+=color.b;
        }
    }
    return {
        r:r/square,
        g:g/square,
        b:b/square
    }
}

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
function setPixel(imageData,x,y,color){
    let index=(x+imageData.width*y)*4;
    imageData.data[index+0]=color.r;
    imageData.data[index+1]=color.g;
    imageData.data[index+2]=color.b;
}
