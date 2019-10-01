var numSquares = 6;
var colors = generateRandomColors(numSquares);
var squares = document.querySelectorAll(".square");
var pickedColor = pickColor();
var colorDisplay = document.querySelector(".colorDisplay");
var messageDisplay = document.querySelector(".message");
var h1 = document.querySelector("h1");
var resetButton = document.querySelector(".reset");
var modeButtons = document.querySelectorAll(".mode");

// Easy & Hard Mode
for (var i = 0; i < modeButtons.length; i++) {
    modeButtons[i].addEventListener("click", function() {
        modeButtons[0].classList.remove("selected");
        modeButtons[1].classList.remove("selected");
        this.classList.add("selected");
        this.textContent === "Easy" ? numSquares = 3: numSquares = 6;
        reset();
    });
}

function reset() {
    // Generate Colors
    colors = generateRandomColors(numSquares);
    // Pick New Random Colors
    pickedColor = pickColor();
    // Change Color Display to Match Picked Color
    colorDisplay.textContent = pickedColor;
    // Change Message Display
    messageDisplay.textContent = "";
    resetButton.textContent = "New Colors";
    // Change Colors of Squares
    for (var i = 0; i < squares.length; i++) {
        if (colors[i]) {
            squares[i].style.display = "block";
            squares[i].style.backgroundColor = colors[i];
        }
        else {
            squares[i].style.display = "none";
        }
    }
    h1.style.backgroundColor = "steelblue";
}

// Reset Button Clicked
resetButton.addEventListener("click", function() {
    reset();
});

colorDisplay.textContent = pickedColor;

for (var i = 0; i < squares.length; i++) {

    // Add Initial Colors to the Squares
    squares[i].style.backgroundColor = colors[i];

    // Add Event Listeners to the Squares
    squares[i].addEventListener("click", function(){

        // Get Color of Clicked Square
        var clickedColor = this.style.backgroundColor;

        // Compare it with pickedColor
        if (clickedColor === pickedColor) {

            messageDisplay.textContent = "Correct";

            // Call Change Colors Function
            changeColors(clickedColor);
            h1.style.backgroundColor = clickedColor;

            // Change Reset Button Text
            resetButton.textContent = "Play Again?";
        }
        else {
            this.style.backgroundColor = "#333333";
            messageDisplay.textContent = "Try Again";
        }

    });
}

// Function to Change Color of All Squares
function changeColors(color) {
    
    // Loop Through All Squares
    for (var i = 0; i < squares.length; i++) {

        // Change Color of Every Square
        squares[i].style.backgroundColor = color;
    }
}

// Function to Pick Color
function pickColor() {
    var random = Math.floor(Math.random() * colors.length);
    return colors[random];
}

// Function to Generate Random Colors
function generateRandomColors(num) {
    
    // Create Array
    var arr = [];

    // Add "num" Random Colors to the Array
    for (var i = 0; i < num; i++) {
        arr.push(randomColor());
    }

    // Return the Array
    return arr;
}

// Sub Function to Generate a Single Random Color
function randomColor() {

    // Red
    var r = Math.floor(Math.random() * 256);
    // Green
    var g = Math.floor(Math.random() * 256);
    // Blue
    var b = Math.floor(Math.random() * 256);

    // Return RGB
    return "rgb(" + r + ", " + g + ", " + b + ")";
}
