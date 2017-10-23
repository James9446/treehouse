// for in loop
var person = {
  name : 'Sarah',
  country : 'US',
  age : 35,
  treehouseStudent : true,
  skills : ['JavaScript', 'HTML', 'CSS']
};

// 'prop' acts like a variable it could be named key or anything else
for (var prop in person) {
	// console feature is letting me print multiple string, so print property name, then a ":" string and then property value
	console.log(prop, ":", person[prop])
}


for (var prop in person) {
	// The ":" string was not necessary it just looks cool, also note that [] notation is necessary. dot notation will not work to get the value in this case
	console.log(prop, person[prop])
}