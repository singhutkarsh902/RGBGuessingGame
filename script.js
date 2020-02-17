var colors = generateRandomColors(6);

var square = document.querySelectorAll(".square");

var colorDisplay = document.querySelector("#colorDisplay");
var pickedColor = pickColor();
colorDisplay.textContent = pickedColor;

var messegeDisplay = document.querySelector("#messege")

var h1 = document.querySelector("h1");
var resetButton = document.querySelector("#reset");
var mode = document.querySelectorAll(".mode");
var numSqaures = 6;

for(var i = 0; i < mode.length; i++) {
	mode[i].addEventListener("click", function() {
		mode[0].classList.remove("selected");
		mode[1].classList.remove("selected");
		mode[2].classList.remove("selected");
		this.classList.add("selected");
		if(this.textContent == "Kids") {
			numSqaures = 3;
		}
		else if(this.textContent == "Men"){
			numSqaures = 6;
		}
		else {
			numSqaures = 9;
		}
		colors = generateRandomColors(numSqaures);
		pickedColor = pickColor();
		colorDisplay.textContent = pickedColor;
		squareDisplay();
		h1.style.background = "rgb(90, 200, 90)";
		messegeDisplay.textContent = "";
	})
}


resetButton.addEventListener("click", function(){
	colors = generateRandomColors(numSqaures);
	pickedColor = pickColor();
	colorDisplay.textContent = pickedColor;
	for(var i = 0; i < square.length; i++) {
		square[i].style.background = colors[i];
	}
	h1.style.background = "rgb(90, 200, 90)";
	resetButton.textContent = "New Colors";
	messegeDisplay.textContent = "";
})

squareDisplay();

function changeColor(color) {
	for (var i=0; i < square.length; i++) {
		if(colors[i]) {
			square[i].style.background = color;
		}
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

function squareDisplay() {
	for (var i = 0; i < square.length; i++) {
		if(colors[i]) {
			square[i].style.background = colors[i];
		}
		else {
			square[i].style.background = "#232323";
		}
		square[i].addEventListener("click",function(){
			var clickedColor = this.style.background;

			if(pickedColor === clickedColor) {
				messegeDisplay.textContent = "Correct!";
				changeColor(pickedColor);
				h1.style.background = pickedColor;
				resetButton.textContent = "Play Again?";
			}
			else {
				this.style.background = "#232323";
				messegeDisplay.textContent = "Try Again";
			}
		})
	}
}