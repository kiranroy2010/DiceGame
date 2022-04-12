//Method 1
var randomNumber1 = Math.floor(Math.random() * 6) + 1; //1-6
var randomImage = "dice" + randomNumber1 + ".png"; //dice1.png - dice6.png
var ImageSource = "images/" + randomImage; //images/dice1.png - images/dice6.png
var image1 = document.querySelectorAll("img")[0];
image1.setAttribute("src", ImageSource);

//Method 2
var randomNumber2 = Math.floor(Math.random() * 6) + 1;
var ImageSource2 = "images/dice" + randomNumber2 + ".png";
document.querySelectorAll("img")[1].setAttribute("src", ImageSource2);

//If player 1 wins
if (randomNumber1 > randomNumber2) {
    document.querySelector("#Result").innerHTML = "🚩 Play 1 Wins!";
  }
  else if (randomNumber2 > randomNumber1) {
    document.querySelector("#Result").innerHTML = "Player 2 Wins! 🚩";
  }
  else {
    document.querySelector("#Result").innerHTML = "Draw!";
  }