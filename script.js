var colors = generateRandomColors(6);

var square = document.querySelectorAll(".square");

var colorDisplay = document.querySelector("#colorDisplay");
var pickedColor = pickColor();
colorDisplay.textContent = pickedColor;

var messegeDisplay = document.querySelector("#messege")

var h1 = document.querySelector("h1");
var resetButton = document.querySelector("#reset");
var easyBtn = document.querySelector("#easyBtn");
var hardBtn = document.querySelector("#hardBtn");

easyBtn.addEventListener("click", function(){
	easyBtn.classList.add("selected");
	hardBtn.classList.remove("selected");
	colors = generateRandomColors(3);
	pickedColor = pickColor();
	colorDisplay.textContent = pickedColor;
	for(var i=0; i = square.length; i++) {
		if(colors[i]) {
			square[i].style.background = colors[i];
		}
		else {
			square[i].style.background = "#232323";
		}
	}
})

hardBtn.addEventListener("click", function(){
	hardBtn.classList.add("selected");
	easyBtn.classList.remove("selected");
})


resetButton.addEventListener("click", function(){
	colors = generateRandomColors(6);
	pickedColor = pickColor();
	colorDisplay.textContent = pickedColor;
	for(var i = 0; i < square.length; i++) {
		square[i].style.background = colors[i];
	}
	h1.style.background = "#232323";
	resetButton.textContent = "New Colors";
})

for (var i = 0; i < square.length; i++) {
	square[i].style.background = colors[i];

	square[i].addEventListener("click",function(){
		var clickedColor = this.style.background;

		if(pickedColor === clickedColor) {
			messegeDisplay.textContent = "Correct!";
			changeColor(pickedColor);
			h1.style.background = pickedColor;
			resetButton.textContent = "Play Again!";
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