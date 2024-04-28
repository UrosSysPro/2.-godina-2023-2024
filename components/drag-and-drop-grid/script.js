var cards=document.getElementsByClassName("card");
var grid=document.getElementById("drag-and-drop");
grid.addEventListener("mousemove",mousemove);
console.log(grid.clientWidth,grid.clientHeight);

var rows=4;
var gridPadding=10;
var cardWidth=(grid.clientWidth-(rows+1)*gridPadding)/rows;
var cardHeight=200;
var selectedDiv=-1;

for(var i=0;i<cards.length;i++){
	var x=i%rows;
	var y=Math.floor(i/rows);
	cards[i].style.width=`${cardWidth}px`;
	cards[i].style.top=`${y*(cardHeight+gridPadding)+gridPadding}px`;
	cards[i].style.left=`${x*(cardWidth+gridPadding)+gridPadding}px`;
	cards[i].addEventListener("mousedown",mousedown);
	cards[i].addEventListener("mouseup",mouseup);
}

function mouseup(e){

}
function mousedown(e){
	for(var i=0;i<cards.length;i++){
		if(e.target==cards[i]){
			selectedDiv=i;
		}
	}
	console.log(selectedDiv);
}
function mousemove(e){
	if(selectedDiv!=-1){
		cards[selectedDiv].style.top=`${e.layerY}px`;
		cards[selectedDiv].style.left=`${e.layerX}px`;
	}
}