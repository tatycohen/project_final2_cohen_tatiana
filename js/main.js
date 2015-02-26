var button = document.getElementById("button");
button.addEventListener("mouseover" , swap , false);
button.addEventListener("mouseout" , swapBack , false);

function swap (){
	console.log("swaped");
	button.src = "img/button-hover.png";
}

function swapBack (){
	console.log("back");
	button.src = "img/button.png";
}