var request=new XMLHttpRequest();
request.onreadystatechange=function(){
    if(this.readyState==4){
        console.log(this.status);
        console.log(this.responseText);
    }
}
request.open("POST","localhost:3000/post");
request.send();