console.log("hello");

var canvas=document.getElementsByTagName("canvas")[0];
canvas.width=500;
canvas.height=500;
var brush=canvas.getContext("2d");

function bubbleSort(niz) {
    for (var j = 0; j < niz.length; j++) {
        for (var i = 0; i < niz.length - 1; i++) {
            if (niz[i] > niz[i + 1]) {
                var p = niz[i];
                niz[i] = niz[i + 1];
                niz[i + 1] = p;
            }
        }
    }
}

function selctionSort(niz){
    for(var i=0;i<niz.length;i++){
        for(var j=i;j<niz.length;j++){
            if(niz[i]>niz[j]){
                var p=niz[i];
                niz[i]=niz[j];
                niz[j]=p;
            }
        }
    }
}

function generateArray(n){
    var niz=[];
    for(var i=0;i<n;i++){
        niz.push(i);
    }
    return niz;
}
function randomizeArray(niz){
    for(var i=0;i<niz.length;i++){
        var j=parseInt(Math.random()*niz.length);
        var p=niz[i];
        niz[i]=niz[j];
        niz[j]=p;
    }
    return niz;
}

function drawArray(niz){
    brush.fillStyle='#000';
    brush.rect(0,0,500,500);
    brush.fill();
    for(var i=0;i<niz.length;i++){
        brush.beginPath();
        brush.strokeStyle='#000';
        brush.fillStyle="#fff";
        brush.rect(i*5,0,5,niz[i]*5);
        brush.fill();
        // brush.stroke();
    }
}


var niz = generateArray(100);
niz=randomizeArray(niz);
drawArray(niz);

console.log(niz);
// selctionSort(niz);
// console.log(niz);
var i=0,j=0;
setInterval(function(){
    for(var k=0;k<10;k++){

    
    if(j<niz.length){
        if(i<niz.length-1){
            if(niz[i]>niz[j]){
                var p=niz[i];
                niz[i]=niz[j];
                niz[j]=p;
            }
        }
    }
    i++;
    if(i>=niz.length){
        i=0;
        j++;
    }
}
    drawArray(niz);
}, 16);