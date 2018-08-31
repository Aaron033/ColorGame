var numSquares = 6; 
var colors = generateRandomColors(numSquares); 
var squares = document.querySelectorAll(".square");
var pickedColor = pickColor(); 
var colorDisplay = document.getElementById("colorDisplay");
var messageDisplay = document.querySelector("#message"); 
var h1 = document.querySelector("h1")
var resetButton =document.querySelector("#reset");
var easyBtn = document.querySelector("#easyBtn"); 
var hardBtn = document.querySelector("#hardBtn"); 

easyBtn.addEventListener("click", function(){
    easyBtn.classList.add("selected"); 
    hardBtn.classList.remove("selected");
    numSquares =3; 
    colors = generateRandomColors(numSquares); 
    pickedColor= pickColor(); 
    colorDisplay.textContent= pickedColor; 
    for(var i=0; i < squares.length; i++){
        if(colors[i]){
            squares[i].style.backgroundColor = colors[i]; 
        }else {
            squares[i].style.display = "none"; 
        }
    }
});

hardBtn.addEventListener("click", function(){
    hardBtn.classList.add("selected"); 
    easyBtn.classList.remove("selected");
    numSquares =6; 
    colors= generateRandomColors(numSquares); 
    pickedColor = pickColor(); 
    colorDisplay.textContent = pickedColor;
    for(var i =0; i < squares.length; i++){
        squares[i].style.backgroundColor = colors[i]; 
        squares[i].style.display = "block"; 
        
    }
    
});
resetButton.addEventListener("click", function(){
    //Generate all new colors
    colors= generateRandomColors(numSquares);
    //pick a new random color from array
    pickedColor = pickColor();
    //Change colorDisplay to match picked color 
    colorDisplay.textContent = pickedColor; 
    this.textContent = "New Colors"; 
    messageDisplay.textContent="";
    //Change colors of sqaures
    for(var i=0; i< squares.length; i++){
        squares[i].style.backgroundColor = colors[i]; 
        
    }
    h1.style.backgroundColor = "steelblue"; 
})
colorDisplay.textContent = pickedColor;

for (var i = 0; i < squares.length; i++) {
    //Add initial colors to squares
    squares[i].style.backgroundColor = colors[i];

    //Add click listener to squares
    squares[i].addEventListener("click", function () {
        //Grab color of clicked square
        var clickedColor = this.style.backgroundColor;
        //Compare color to pickedColor 
        
        if (clickedColor === pickedColor) {
            messageDisplay.textContent = "Correct!!"
            resetButton.textContent = "play Again?"; 
            changeColors(clickedColor); 
            h1.style.backgroundColor= clickedColor; 
        } else {
           this.style.backgroundColor = "#232323"; 
            messageDisplay.textContent = "Try Again!!"
        }
    });
}
function changeColors(color){
    //loop through all squares
    for(var i=0; i < squares.length; i++){
        //Change each color to match given color
        squares[i].style.backgroundColor = color;    
    }
}
function pickColor(){
    var random = Math.floor(Math.random() * colors.length);
    return colors[random]; 
}

function generateRandomColors(num){
    //Make an array 
    var arr =[]
    //Repeat num times 
    for(var i=0; i < num; i++){
        arr.push(randomColor()); 
        //Get random color and push into arr
        
    }
    //Return arr
    return arr; 
    
}
function randomColor(){
    //Pick a "Red" from 0 to 225
   var r= Math.floor(Math.random() * 256); 
    //pick a "Green" from 0 to 225
    var g= Math.floor(Math.random() * 256); 
    //Pick a "blue" from 0 to 225
    var b= Math.floor(Math.random() * 256); 
    
    return "rgb(" + r + ", " + g + ", " + b +")";
}