// for (i = 0; i < students.length; i++) {
// 	console.log(students[i].name, students[i].track, students[i].achievements, students[i].points)
// }

var message = '';
var student;

function print(message) {
	var outputDiv = document.getElementById('output')
	outputDiv.innerHTML = message;
}

for (i = 0; i < students.length; i++) {
	student = students[i];
	message += "<h2>Student: " + student.name + "</h2>";
	message += "<p> Track: " + student.track + "</p>";
	message += "<p> Achievements: " + student.achievements + "</p>";
	message += "<p> Points: " + student.points + "</p>";
}

print(message);