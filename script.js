var colors = generateRandomColors(6);

var square = document.querySelectorAll(".square");

var colorDisplay = document.querySelector("#colorDisplay");
var pickedColor = pickColor();
colorDisplay.textContent = pickedColor;

var messegeDisplay = document.querySelector("#messege")

//var h1 = document.querySelector("h1");

for (var i = 0; i < square.length; i++) {
	square[i].style.background = colors[i];

	square[i].addEventListener("click",function(){
		var clickedColor = this.style.background;

		if(pickedColor === clickedColor) {
			messegeDisplay.textContent = "Correct!";
			changeColor(pickedColor);
			h1.style.background = pickedColor;
		}
		else {
			this.style.background = "#232323";
			messegeDisplay.textContent = "Try Again";
		}
	})
}

function changeColor(color) {
	for (var i=0; i < square.length; i++) {
		square[i].style.background = color;
	}
}

function pickColor() {
	var random = Math.floor(Math.random() * colors.length);
	return colors[random];
}

function generateRandomColors(num) {
	var arr = [];
	for(var i=0; i < num; i++) {
		arr.push(randomColor());
	}
	return arr;
}

function randomColor() {
	var r = Math.floor(Math.random() * 256);
	var g = Math.floor(Math.random() * 256);
	var b = Math.floor(Math.random() * 256);
	return("rgb("+r+", "+g+", "+b+")");
}