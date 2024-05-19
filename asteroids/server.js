var ws=require("ws");

var server=new ws.WebSocketServer({
    port:3000
});

console.log("Server started...");

var clients=[];
var players=[];

server.on("connection",connect);
function connect(client){
    clients.push(client);
    players.push({
        x:Math.random()*500,
        y:Math.random()*500,
        vx:0,vy:0,accx:0,accy:0
    });
    console.log("new player connected");
    client.onmessage=function (message){
        var data=JSON.parse(message.data);
        var index=clients.indexOf(client);
        var player=players[index];
        var acc=0.1;
        if(data.left)player.accx=-acc;
        if(data.right)player.accx=acc;
        if(data.up)player.accy=-acc;
        if(data.down)player.accy=acc;
    }
    client.onclose=function(){
        console.log("client disconnected");
        var index=clients.indexOf(client);
        clients.splice(index,1);
        players.splice(index,1);
    }
}

setInterval(() => {
    //update all players
    for(var i=0;i<players.length;i++){
        var player=players[i];
        player.vx+=player.accx;
        player.vy+=player.accy;
        player.accx=0;
        player.accy=0;
        var drag=0.01;
        player.vx+=player.vx>0?-drag:drag;
        player.vy+=player.vy>0?-drag:drag;
        player.x+=player.vx;
        player.y+=player.vy;
        if(player.x>500)player.x=0;
        if(player.x<0)player.x=500;
        if(player.y>500)player.y=0;
        if(player.y<0)player.y=500;
    }
    //send game data to all players
    var data=JSON.stringify(players);
    for(var i=0;i<clients.length;i++){
        clients[i].send(data);
    }
}, 16);
/*
    var players=[
        {
            x,y
        }
    ]
    update()
*/

/*
    var players=[
        {
            x,y
        }
    ]
    input()
    draw()
*/