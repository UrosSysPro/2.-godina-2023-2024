var glowDiv=document.getElementById("glow");
console.log(glowDiv);


function enter(e) {
	glowDiv.style.top=`${e.layerY-200}px`;
	glowDiv.style.left=`${e.layerX-200}px`;
}
function mousemove(e){
	glowDiv.style.top=`${e.layerY-200}px`;
	glowDiv.style.left=`${e.layerX-200}px`;
}