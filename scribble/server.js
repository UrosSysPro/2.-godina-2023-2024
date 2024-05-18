var ws=require("ws");

console.log("Server started...");

var server=new ws.WebSocketServer({
    port:3000
});

server.on("connection",connect);

function connect(client){
    console.log("client se povezao");

    client.send("hello from server");
    client.onmessage=function(message){
        for(var ws of server.clients){
            ws.send(message.data);
        }
    }
    client.onclose=function(){
        console.log("client se diskonektovao");
    }
}