// Random Number Genorator
function getRandomNumber(upper) {
	if (isNaN(upper)) {
		console.log("The argument \"" + upper + "\" that you entered into the getRandomNumber() function is not a number.")
	} else {
		var randomNumber = Math.floor(Math.random() * upper) + 1;
		return randomNumber;
	}
}


// Random Ranged Number Generator
// The numbers given as arguments are included as possible outcomes for the function
function getRandomRangedNumber(lower, upper) {
	if (isNaN(lower) || isNaN(upper)) {
		console.log("One or more of your arguments is not a number")
	} else if (lower >= upper) {
		console.log("For getRandomRangedNumber() function to work please enter a number for the first argument that is lower than the second argument.");
	} else {
		var randomNumber = Math.floor(Math.random() * ((upper + 1) - lower)) + (lower - 1) + 1;
		return randomNumber;
	}
}


// Rare item generator
function getItemScarcity () {
	var itemScarcity;
	if (getRandomNumber(1000) > 950) {
		return itemScarcity = "Legendary item";
	} else if (getRandomNumber(1000) > 850){
		return itemScarcity = "Epic item";
	} else if (getRandomNumber(1000) > 700){
		return itemScarcity = "Rare item";
	} else if (getRandomNumber(1000) > 550){
		return itemScarcity = "Uncommon item";
	} else {
		return itemScarcity = "Common item";
	}
}


// Calcutate the area of a rectangle
function getArea(width, length, unit) {
	var area = width * length + " " + unit;
	return area;
}

