var express=require('express');

var app=express();

var posts=[
    {
        author:"First Last Name",
        body:"bla bla bla",
        likes:100,
        coments:200
    }
];

app.get('/post', function (req, res) {
    console.log("get request");
    res.send(JSON.stringify(posts));
})
app.post('/post', function (req, res) {
    console.log("post request");
    res.send("hello");
})

app.listen(3000);

/*
node -- js interpreter koji se izvrsava u terminalu i ima dosta biblioteka
epxress -- biblioteka za pravljenje http servera

http request -- jedan poziv na server 
    method -- GET POST PUT DELETE
    header -- neke informacije o requestu
    body   -- sta se salje na server

*/