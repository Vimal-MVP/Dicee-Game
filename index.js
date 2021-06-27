var randomNumber1 = Math.floor(Math.random()*6 + 1);
var dice1 = document.querySelector(".img1")

var randomNumber2 = Math.floor(Math.random()*6 + 1);
var dice2 = document.querySelector(".img2")

switch (randomNumber1) {
  case 1:
  dice1.setAttribute("src","images/dice1.png");
  break;
  case 2:
  dice1.setAttribute("src","images/dice2.png");
  break;
  case 3:
  dice1.setAttribute("src","images/dice3.png");
  break;
  case 4:
  dice1.setAttribute("src","images/dice4.png");
  break;
  case 5:
  dice1.setAttribute("src","images/dice5.png");
  break;
  case 6:
  dice1.setAttribute("src","images/dice6.png");
  break;
}

switch (randomNumber2) {
  case 1:
  dice2.setAttribute("src","images/dice1.png");
  break;
  case 2:
  dice2.setAttribute("src","images/dice2.png");
  break;
  case 3:
  dice2.setAttribute("src","images/dice3.png");
  break;
  case 4:
  dice2.setAttribute("src","images/dice4.png");
  break;
  case 5:
  dice2.setAttribute("src","images/dice5.png");
  break;
  case 6:
  dice2.setAttribute("src","images/dice6.png");
  break;
}

if (randomNumber1 == randomNumber2) {
  document.getElementsByTagName('h1')[0].innerHTML = 'Draw!';
} else if (randomNumber1 >= randomNumber2) {
  document.getElementsByTagName('h1')[0].innerHTML = 'Player 1 Wins!';
} else {
  document.getElementsByTagName('h1')[0].innerHTML = 'Player 2 Wins!';
}
