var RandomNumber1 = Math.random() * 6;
var RandomNumber2 = Math.random() * 6;
RandomNumber1 = Math.floor(RandomNumber1) + 1;
RandomNumber2 = Math.floor(RandomNumber2) + 1;
console.log("Random Num1: " + RandomNumber1 + " Random Num2: " + RandomNumber2);

//Dice1
if (RandomNumber1 === 1) {
  document.querySelector("img").setAttribute("src", "images/dice1.png");
}
if (RandomNumber2 === 1) {
  document.querySelectorAll("img")[1].setAttribute("src", "images/dice1.png");
}

// Dice2
if (RandomNumber1 === 2) {
  document.querySelector("img").setAttribute("src", "images/dice2.png");
}
if (RandomNumber2 === 2) {
  document.querySelectorAll("img")[1].setAttribute("src", "images/dice2.png");
}
//Dice3
if (RandomNumber1 === 3) {
  document.querySelector("img").setAttribute("src", "images/dice3.png");
}
if (RandomNumber2 === 3) {
  document.querySelectorAll("img")[1].setAttribute("src", "images/dice3.png");
}
//Dice4
if (RandomNumber1 === 4) {
  document.querySelector("img").setAttribute("src", "images/dice4.png");
}
if (RandomNumber2 === 4) {
  document.querySelectorAll("img")[1].setAttribute("src", "images/dice4.png");
}
// Dice5
if (RandomNumber1 === 5) {
  document.querySelector("img").setAttribute("src", "images/dice5.png");
}
if (RandomNumber2 === 5) {
  document.querySelectorAll("img")[1].setAttribute("src", "images/dice5.png");
}
//Dice6
if (RandomNumber1 === 6) {
  document.querySelector("img").setAttribute("src", "images/dice6.png");
}
if (RandomNumber2 === 6) {
  document.querySelectorAll("img")[1].setAttribute("src", "images/dice6.png");
}
// Player1WinsRule
if (RandomNumber1 > RandomNumber2) {
  document.querySelector("h1").innerHTML = "Player1 Wins!";
}
// Player2WinsRule
if (RandomNumber2 > RandomNumber1) {
  document.querySelector("h1").innerHTML = "Player2 Wins!";
}
// Draw
if (RandomNumber1 === RandomNumber2) {
  document.querySelector("h1").innerHTML = "Match Drawn!";
}
