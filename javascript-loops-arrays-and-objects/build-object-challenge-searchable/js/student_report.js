// for (i = 0; i < students.length; i++) {
// 	console.log(students[i].name, students[i].track, students[i].achievements, students[i].points)
// }

var message = '';
var student;
var userInput;

function print(message) {
	var outputDiv = document.getElementById('output')
	outputDiv.innerHTML = message;
}

while (true) {
	userInput = prompt("Please enter a student name to search student records, or type \"Quit\" to exit.");
	userInput = userInput.toLowerCase();
	// the or userInput === null conditional is added incase the cancel button is pressed on the prompt
	// Otherwise you would be trying to use the toLowerCase() function on null which would give an error
	if (userInput.toLowerCase() === "quit" || userInput === null) {
		break;
	}
	for (i = 0; i < students.length; i++) {
		student = students[i];
		if (userInput === student.name.toLowerCase()) {
			message += "<h2>Student: " + student.name + "</h2>";
			message += "<p> Track: " + student.track + "</p>";
			message += "<p> Achievements: " + student.achievements + "</p>";
			message += "<p> Points: " + student.points + "</p>";
		}
	}
} 


print(message);