// We have created method. An object that has a property with a value that is a function is a method
// The function is 'anonymous' as in it doesn't have a name
// Using an anonymous function is most common way to see a method defined - 


// Sides was a variable declared inside the function but that made it inaccessible programatically 
// By making sides a property it can be accessed and altered programatically

// Finally inside the randonNumber function dice.sides was changed to this.sides
// One benefit to this is if we ever want to change the variable name of the object 'dice' we would need to also another line of code
// 'this' refers to 'the object that owns the method being called'

var dice = {
	sides: 6,
  roll: function() {
	  var randomNumber = Math.floor(Math.random() * this.sides) + 1;
	  console.log(randomNumber);
	}
}
dice.roll();

dice.sides = 20;

dice.roll();
