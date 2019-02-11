var colors = [
    "rgb(255, 0, 0)",
    "rgb(0, 0, 0)",
    "rgb(255, 255, 0)",
    "rgb(255, 0, 255)",
    "rgb(0, 255, 0)",
    "rgb(0, 255, 255)"
]

var squares = document.querySelectorAll(".square");
var pickedColor = colors[3];
var colorDisplay = document.getElementById("colorDisplay");

colorDisplay.textContent = pickedColor;


for (var i = 0; i < squares.length; i++) {
    //Add initial colors
    squares[i].style.background = colors[i]

    //Add click listeners
    squares[i].addEventListener("click", function () {
        //Grab color of clicked square
        var clickedColor = this.style.background;
        //Compare to color to picked one
        if (clickedColor === pickedColor) {
            alert("Correct!!");
        } else {
            alert("Wrong!!");
        }
       
    })
}