var canvas=document.getElementsByTagName("canvas")[0];

canvas.width=canvas.clientWidth;
canvas.height=canvas.clientHeight;

var brush=canvas.getContext("2d");


let image=document.getElementsByTagName("img")[0];

brush.drawImage(image,100,100,100,100);

var imageData=brush.getImageData(100,100,100,100);

for(let i=0;i<imageData.width;i++){
    for(let j=0;j<imageData.height;j++){
        var color=readPixel(imageData,i,j);
        color.r=255-color.r;
        color.g=255-color.g;
        color.b=255-color.b;
        writePixel(image,i,j,color);
    }
}

brush.putImageData(imageData,100,100);


function readPixel(imageData,x,y){
    var index=(x+y*imageData.width)*4;
    var r=imageData.data[index+0];
    var g=imageData.data[index+1];
    var b=imageData.data[index+2];
    return {r,g,b};
}

function writePixel(imageData,x,y,color){
    var index=(x+y*imageData.width)*4;
    imageData.data[index+0]=color.r;
    imageData.data[index+1]=color.g;
    imageData.data[index+2]=color.b;
}