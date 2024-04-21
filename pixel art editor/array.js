var dugme=document.getElementById('dugme');
dugme.addEventListener('click',click);

function click(){
	var div=document.getElementById('kvadrat');
	console.log(div);
	div.style.backgroundColor='blue';
}