//EXAMPLE
// let rand = Math.random();
// console.log(rand);

// //10 percent heads and 60 percent feet 30 percent tails

// if (rand < 0.1) {
//   console.log("Heads");
// } else if (rand < 0.7) {
//   console.log("feet");
// } else {
//   console.log("tails");
// }

///HTML VARIABLES
let output1 = document.getElementById("output");
let headsCount = document.getElementById("heads-o");
let tailsCount = document.getElementById("tails-o");
///COUNT VARIABLES
let numHeads = 0;
let numTails = 0;

/// COIN FLIP SIMULATOR
document.getElementById("btn").addEventListener("click", btnClicked);

function btnClicked() {
  //Generate a random number
  let randNum = Math.random();
  console.log(randNum);

  //simulate the coin flip
  if (randNum < 0.5) {
    output1.innerHTML = "<img src='img/heads.png'>";
    numHeads = numHeads + 1;
    headsCount.innerHTML = numHeads;
  } else {
    output1.innerHTML = "<img src='img/tails.png'>";
    numTails = numTails + 1;
    tailsCount.innerHTML = numTails;
  }
}

///HTML VARIABLES
let output2 = document.getElementById("diceOutput");
let pip1 = document.getElementById("pip1-o");
let pip2 = document.getElementById("pip2-o");
let pip3 = document.getElementById("pip3-o");
let pip4 = document.getElementById("pip4-o");
let pip5 = document.getElementById("pip5-o");
let pip6 = document.getElementById("pip6-o");

//DICE COUNT VARAIBLES
let pipC1 = 0;
let pipC2 = 0;
let pipC3 = 0;
let pipC4 = 0;
let pipC5 = 0;
let pipC6 = 0;

/// DICE ROLL SIMULATOR
document.getElementById("diceBtn").addEventListener("click", diceBtn);

function diceBtn() {
  //Generate random number
  let randNumDice = Math.random() * 100;
  console.log(randNumDice);

  //simulate Dice roll
  if (randNumDice < 16.65) {
    output2.innerHTML = "<img src='img/1.png'>";
    pipC1 = pipC1 + 1;
    pip1.innerHTML = pipC1;
  } else if (randNumDice < 33) {
    output2.innerHTML = "<img src='img/2.png'>";
    pipC2 = pipC2 + 1;
    pip2.innerHTML = pipC2;
  } else if (randNumDice < 49.5) {
    output2.innerHTML = "<img src='img/3.png'>";
    pipC3 = pipC3 + 1;
    pip3.innerHTML = pipC3;
  } else if (randNumDice < 66) {
    output2.innerHTML = "<img src='img/4.png'>";
    pipC4 = pipC4 + 1;
    pip4.innerHTML = pipC4;
  } else if (randNumDice < 82.5) {
    output2.innerHTML = "<img src='img/5.png'>";
    pipC5 = pipC5 + 1;
    pip5.innerHTML = pipC5;
  } else if (randNumDice < 99) {
    output2.innerHTML = "<img src='img/6.png'>";
    pipC6 = pipC6 + 1;
    pip6.innerHTML = pipC6;
  }
}
