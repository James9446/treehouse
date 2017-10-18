// Challenge Instructions

// Ask at least five questions

// Keep track of the number of questions the user answered correctly

// Provide a final message after the quiz letting the user know the number of questions he or she got right.

// Rank the player. If the player answered all five correctly, give that player the gold crown: 3-4 is a silver crown; 1-2 correct answers is a bronze crown and 0 correct is no crown at all.

var answer1 = prompt("What programming language is the name of a gem?");
var numberCorrect = 0;
if (answer1.toUpperCase() === "RUBY") {
	numberCorrect += 1;
	console.log(numberCorrect)
} 

var answer2 = prompt("What programming language is a type of snake?");
if (answer2.toUpperCase() === "PYTHON") {
	numberCorrect += 1;
	console.log(numberCorrect)
} 

var answer3 = prompt("What is the only programming language that can do both front-end and back-end?");
if (answer3.toUpperCase() === "JAVASCRIPT") {
	numberCorrect += 1;
	console.log(numberCorrect)
} 

var answer4 = prompt("What language creates the structure of websites?");
if (answer4.toUpperCase() === "HTML") {
	numberCorrect += 1;
	console.log(numberCorrect)
}

var answer5 = prompt("What is the popular CSS framework created by twitter?");
if (answer5.toUpperCase() === "BOOTSTRAP") {
	numberCorrect += 1;
	console.log(numberCorrect)
}

document.write("<h1>You got " + numberCorrect + " answers right.</h1>")

if (numberCorrect === 5) {
	document.write("<h2>You get a gold crown!</h2>")
} else if (numberCorrect < 5 && numberCorrect > 2) {
	document.write("<h2>You get a silver crown!</h2>")
} else if (numberCorrect < 3 && numberCorrect > 0) {
	document.write("<h2>You get a bronze crown!</h2>")
} else {
	document.write("<h2>You get no crown</h2>")
}


// else {
// 	document.write("<p>Srry that's not quite right</p>");
// }
// console.log(answer1);

// // Number guessing game using a random number 
// var randomNumer = Math.floor(Math.random() * 6) + 1;

// // This is to cheat using console
// console.log("The answer is " + randomNumer);

// // Variable for input
// var guess = prompt("I'm thinking of a number between 1 and 6. What is it?");

// // Variable using boolean value to track if guess is correct or not
// var correctGuess = false;

// // This conditional if true updates correctGuess boolean to store guess value 
// // --- This was done in order to add flexibility for later development
// if (parseInt(guess) === randomNumer) {
// 	correctGuess = true;

// // This is that later development. It gives the user a hint if they guessed too low a second chance to guess
// } else if (parseInt(guess) < randomNumer) {
// 	var guessAgain = prompt("Sorry! The number I am thinking of is greater than " + guess);
// 	if (parseInt(guessAgain) === randomNumer) {
// 		correctGuess = true;
// 	}

// // This is also that later development. It also gives the user a hint if they guessed too high a second chance to guess
// } else if (parseInt(guess) > randomNumer) {
// 	var guessAgain = prompt("Sorry! The number I am thinking of is less than " + guess);
// 	if (parseInt(guessAgain) === randomNumer) {
// 		correctGu
// // Since this is a boolean data type it will run if it is true. Therefor it does not need '=== true'
// if (correctGuess) {
// 	document.write("<p>That's right! The number is " + randomNumer + "</p>");
// } else {
// 	document.write("<p>Sorry! The number was " + randomNumer + "</p>");
// }