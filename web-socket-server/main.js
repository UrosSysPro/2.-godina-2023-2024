var ws=require("ws");

var server=new ws.WebSocketServer({
    port:5000,
});

server.on("connection",function(client){

    console.log("new client");
    
    client.onmessage=function(event){
        console.log("message: "+event.data);
        for(var client of server.clients){
            client.send(event.data);
        }
    }
    
    client.onclose=function(event){
        console.log("client disconnected");
    }
});
