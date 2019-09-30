var colors = generateRandomColors(6);
var squares = document.querySelectorAll(".square");
var pickedColor = pickColor();
var colorDisplay = document.querySelector(".colorDisplay");
var messageDisplay = document.querySelector(".message");

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
