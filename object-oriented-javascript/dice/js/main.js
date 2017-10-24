// We have created method. An object that has a property with a value that is a function is a method
// The function is 'anonymous' as in it doesn't have a name
// Using an anonymous function is most common way to see a method defined - 
var dice = {
  roll: function() {
	  var sides = 6;
	  var randomNumber = Math.floor(Math.random() * sides) + 1;
	  console.log(randomNumber);
	}
}

dice.roll();