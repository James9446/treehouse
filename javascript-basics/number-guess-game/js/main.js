// Number guessing game using a random number 
var randomNumer = Math.floor(Math.random() * 6) + 1;

// This is to cheat using console
console.log("The answer is " + randomNumer);

// Variable for input
var guess = prompt("I'm thinking of a number between 1 and 6. What is it?");

// Variable using boolean value to track if guess is correct or not
var correctGuess = false;

// This conditional if true updates correctGuess boolean to store guess value 
// --- This was done in order to add flexibility for later development
if (parseInt(guess) === randomNumer) {
	correctGuess = true;

// This is that later development. It gives the user a hint if they guessed too low a second chance to guess
} else if (parseInt(guess) < randomNumer) {
	var guessAgain = prompt("Sorry! The number I am thinking of is greater than " + guess);
	if (parseInt(guessAgain) === randomNumer) {
		correctGuess = true;
	}

// This is also that later development. It also gives the user a hint if they guessed too high a second chance to guess
} else if (parseInt(guess) > randomNumer) {
	var guessAgain = prompt("Sorry! The number I am thinking of is less than " + guess);
	if (parseInt(guessAgain) === randomNumer) {
		correctGuess = true;
	}
}

// Since this is a boolean data type it will run if it is true. Therefor it does not need '=== true'
if (correctGuess) {
	document.write("<p>That's right! The number is " + randomNumer + "</p>");
} else {
	document.write("<p>Sorry! The number was " + randomNumer + "</p>");
}