/*
    A[n]={
        A[n-1]+[An-2]
        0     n==0
        1     n==1
    }

    5!=5*4*3*2*1
    5!=5*4!
    0!=1

    n^k=n*n*n*n*...*
    n^k=n*n^(k-1)
    n^k={
        n^(k/2)*n^(k/2)    k%2==0
        n*n^(k/2)*n^(k/2)  k%2==1
        1                  k==0
    }
    */

function fibonaci(n){
    if(n==0||n==1)return n;
    return fibonaci(n-1)+fibonaci(n-2);
}

function factorial(n){
    if(n==0)return 1;
    return n*factorial(n-1);
}

function power(n,k){
    if(k==0)return 1;
    if(k%2==0){
        var p=power(n,k/2);
        return p*p;
    }else{
        var p=power(n,Math.floor(k/2));
        return n*p*p;
    }
}
function print(n){
    if(n<0)return;
    console.log(power(2,n));
    print(n-1);
}

function line(x1,y1,x2,y2){
    brush.beginPath();
    brush.moveTo(x1,y1);
    brush.lineTo(x2,y2);
    brush.lineWidth=1;
    brush.lineCap='round';
    brush.strokeStyle='#00ef7f';
    brush.stroke();
}

function printThree(x1,y1,x2,y2,n){
    //uslov izlaza
    if(n<0)return;
    //nacrta linija
    line(x1,y1,x2,y2);
    //rekruzivni poziv
    var vx=x2-x1;
    var vy=y2-y1;
    var ugao=Math.atan2(vy,vx);
    var length=n*4;
    var offset=Math.PI/8;
    ugao-=offset;
    printThree(x2,y2,x2+Math.cos(ugao)*length,y2+Math.sin(ugao)*length,n-1);
    ugao+=2*offset;
    printThree(x2,y2,x2+Math.cos(ugao)*length,y2+Math.sin(ugao)*length,n-1);
}


function kvadrat(width,height,n){
    if(n<0)return ;
    brush.beginPath();
    brush.rect(0,0,width,height);
    brush.fillStyle=`rgb(${100},${n*30},${200})`;
    brush.fill();
    kvadrat(width*0.9,height*0.9,n-1);
}

var canvas=document.getElementsByTagName('canvas')[0];
var brush=canvas.getContext('2d');

canvas.width=500;
canvas.height=500;

kvadrat(400,400,10);


// printThree(250,500,250,400,10);