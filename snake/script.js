var canvas=document.getElementsByTagName("canvas")[0];

canvas.width=canvas.clientWidth;
canvas.height=canvas.clientHeight;

var brush=canvas.getContext("2d");


var cellSize=10;
var width=canvas.width/cellSize;
var height=canvas.height/cellSize;
var score=0;

var food={
    x:20,y:20,
};

var snake=[
    {
        x:width/2,
        y:height/2
    },
    {
        x:width/2,
        y:height/2
    },
    {
        x:width/2,
        y:height/2
    },
    {
        x:width/2,
        y:height/2
    },
    {
        x:width/2,
        y:height/2
    },
    {
        x:width/2,
        y:height/2
    }
];
var vx=1;
var vy=0;


function loop(){
    brush.clearRect(0,0,canvas.width,canvas.height);
    update();
    draw();
}

function input(event){
    if(event.key=='w'){
        vx=0;
        vy-=1;
    }
    if(event.key=='a'){
        vx=-1;
        vy=0;
    }
    if(event.key=='s'){
        vx=0;
        vy=1;
    }
    if(event.key=='d'){
        vx=1;
        vy=0;
    }
    if(event.key==' '){
        add();
    }
    // console.log(event.key)
}

function update(){
    for(var i=snake.length-1;i>=1;i--){
        snake[i].x=snake[i-1].x;
        snake[i].y=snake[i-1].y;
    }
    snake[0].x+=vx;
    snake[0].y+=vy;
    if(snake[0].x<0)snake[0].x=width-1;
    if(snake[0].x>width-1)snake[0].x=0;
    if(snake[0].y<0)snake[0].y=height-1;
    if(snake[0].y>height-1)snake[0].y=0;
    if(snake[0].x==food.x&&snake[0].y==food.y){
        add();
        food={
            x:Math.floor(Math.random()*width),
            y:Math.floor(Math.random()*height),
        }
    }
}

function draw(){
    for(var i=0;i<snake.length;i++){
        var x=snake[i].x*cellSize;
        var y=snake[i].y*cellSize;

        brush.beginPath();
        brush.rect(x,y,cellSize,cellSize);
        brush.fillStyle="black";
        brush.fill();
    }
    brush.beginPath();
    brush.rect(food.x,food.y,cellSize,cellSize);
    brush.fillStyle="red";
    brush.fill();
}

function add(){
    snake.push({
        x:snake[snake.length-1].x,
        y:snake[snake.length-1].y,
    });
}

setInterval(loop,1000/40);

/*
    GAME LOOP

    60 fps - game loop se ponavlja 60 puta po sekundi
    frame time - vreme za koje se izvrsava jedan frame da bi igrica radila na tom fps
    za 60fps frame time < 16ms      0.016s

    setup()              // inicijalizujemo promenljive
    while(true){
        clear()          //obrise ekran
        input();  ~1%    //read keyboard and mouse input
        update(); ~9%    //pomeranje objekata u igrici, provere, logika, simulacija fizike
        draw();   ~90%   //prikazivanje na ekranu
    }
    end()                //sacuvamo heigh score, sacuvamo check point

*/