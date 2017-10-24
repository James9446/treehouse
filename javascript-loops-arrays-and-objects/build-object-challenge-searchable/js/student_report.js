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

function getStudentReport(student) {
	var report = "<h2>Student: " + student.name + "</h2>";
	report += "<p> Track: " + student.track + "</p>";
	report += "<p> Achievements: " + student.achievements + "</p>";
	report += "<p> Points: " + student.points + "</p>";
	return report;
}

while (true) {
	userInput = prompt("Please enter a student name to search student records, or type \"Quit\" to exit.");
	// userInput = userInput.toLowerCase();
	// the or userInput === null conditional is added incase the cancel button is pressed on the prompt
	// Otherwise you would be trying to use the toLowerCase() function on null which would give an error
	if (userInput === null || userInput.toLowerCase() === "quit") {
		break;
	}
	for (i = 0; i < students.length; i++) {
		student = students[i].toLowerCase();
		if (userInput.toLowerCase() === student.name) {
			message = getStudentReport(student);
			print(message);
			console.log("if");
		} else if (userInput.toLowerCase() !== student.name) {
			print("<h2> Sorry there is no record for " + userInput + "</h2>");
			console.log("esle if");
			break;
		}
	}
} 


print(message);