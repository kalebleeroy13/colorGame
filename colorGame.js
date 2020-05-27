let numSquares = 6;
let colors = generateRandomColors(numSquares);
let squares =  document.querySelectorAll(".square");
let pickedColor = pickColor();
let colorDisplay = document.getElementById("colorDisplay");
let messageDisplay = document.querySelector("#message")
let h1 = document.querySelector("h1");
let resetButton = document.querySelector("#reset");
let modeButtons = document.querySelectorAll(".mode");


init();

function init(){
  // modeButtons EventListener
  for(let i = 0; i < modeButtons.length; i++){
    modeButtons[i].addEventListener("click", function(){
      modeButtons[0].classList.remove("selected");
      modeButtons[1].classList.remove("selected");
      this.classList.add("selected");
      this.textContent === "Easy" ? numSquares = 3: numSquares = 6;
      // long version of tenry operator
      // if(this.textContent === "Easy"){
      //   numSquares = 3;
      // } else {
      //   numSquares = 6;
      // }
      reset();
    });
  }

  for(let i = 0; i < squares.length; i++){
    // add click listeners to squares
    squares[i].addEventListener("click", function(){
      // grab color of clicked square
      let clickdColor = this.style.backgroundColor;
      // compare color to pickedColor
      console.log(clickedColor, pickedColor);
      if(clickedColor === pickedColor){
        messageDisplay.textContent = "Correct!";
        resetButton.textContent = "Play Again?"
        changeColors(clickedColor);
        h1.style.backgroundColor = clickedColor;
      } else {
        this.style.backgroundColor = "#232323";
        messageDisplay.textContent = "Try Again"
      }
    });
  }
}



function reset(){
  colors = generateRandomColors(numSquares);
  // pick a new random color from array
  pickedColor = pickColor();
  // change colorDisplay to match picked Color
  colorDisplay.textContent = pickedColor;
  resetButton.textContent = "New Colors"
  messageDisplay.textContent = "";
  // change colors of squares
  for(let i = 0; i < squares.length; i++){
    if(colors[i]){
      squares[i].style.display = "block";
      squares[i].style.backgroundColor = colors[i];
    } else {
      squares[i].style.display = "none";
    }
  }
  h1.style.backgroundColor = "steelblue";
}


resetButton.addEventListener("click", function(){
  reset();
  });

  colorDisplay.textContent = pickedColor;



function changeColors(color){
  // loop through all squares
  for(let i = 0; i < squares.length; i++){
    // change each color to match given color
    squares[i].style.backgroundColor = color;
  }
}

function pickColor(){
  // randomly pick rgb color
  let random = Math.floor(Math.random() * colors.length);
  return colors[random];
}


function generateRandomColors(num){
  // make an array
  let arr = []
  // repeat num times
  for(let i = 0; i < num; i++){
    // get random color and push into arr
    arr.push(randomColor())

  }
  // return that array
  return arr;
}

function randomColor(){
  // pick a "red" from 0 - 255
  let r = Math.floor(Math.random() * 256);
  // pick a "green" from 0 - 255
  let g = Math.floor(Math.random() * 256);
  // pick a "blue" from 0 - 255
  let b = Math.floor(Math.random() * 256);
  "rgb(r, g, b)"
  return "rgb(" + r + ", " + g + ", " + b + ")";
}
