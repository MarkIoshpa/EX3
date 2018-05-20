function generateBoxes() {
	var main = document.getElementById("wrapperB");
	var box;
	var opacity;
	
	for(var i = 0; i < 8; i++) {
		box = document.createElement("article");
		opacity = Math.random();
		box.style.backgroundColor = "rgba(0,0,0,"+opacity+")";
		box.className = 'h';
		main.appendChild(box);
	}
}
