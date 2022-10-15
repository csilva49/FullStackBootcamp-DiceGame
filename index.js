//generate random number
function randomIntFromInterval(min, max) {
  return Math.floor(Math.random() * (max - min + 1) + min);
}

//put the random numbers into variables
var randomNumber1 = randomIntFromInterval(1, 6);
console.log(randomNumber1);
var randomNumber2 = randomIntFromInterval(1, 6);
console.log(randomNumber2);

//change the img based on results

//img1
document
  .querySelector(".img1")
  .setAttribute("src", "images/dice" + randomNumber1 + ".png");

//img2
document
  .querySelector(".img2")
  .setAttribute("src", "images/dice" + randomNumber2 + ".png");

//announce winner
if (randomNumber1 > randomNumber2) {
  document.querySelector("h1").innerHTML = "Player 1 Wins!";
} else if (randomNumber1 < randomNumber2) {
  document.querySelector("h1").innerHTML = "Player 2 Wins!";
} else if (randomNumber1 == randomNumber2) {
  document.querySelector("h1").innerHTML = "It's a draw!";
}
