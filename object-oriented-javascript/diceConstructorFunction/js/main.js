// The challenge was to create a dice 

// Original Object literal version 
// var dice = {
// 	sides: 6,
//   roll: function() {
// 	  var randomNumber = Math.floor(Math.random() * this.sides) + 1;
// 	  return randomNumber;
// 	}
// }

function Dice(sides) {
	this.sides = sides,
	this.roll = function() {
	  var randomNumber = Math.floor(Math.random() * this.sides) + 1;
	  return randomNumber;
	}
};

var dice6 = new Dice(6);
var dice24 = new Dice(24);

// console.log(dice24.roll());

// // dice.sides = 20;

// dice.roll();


function printNumber(number) {
  var placeholder = document.getElementById("placeholder");
  placeholder.innerHTML = number;
}

var button = document.getElementById("button");

button.onclick = function() {
  // var result = 1;
  printNumber(dice24.roll())
}


