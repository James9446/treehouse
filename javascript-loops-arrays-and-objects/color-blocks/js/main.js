var html = '';


function randomColor() {
	var red = Math.floor(Math.random() * 256 );
	var green = Math.floor(Math.random() * 256 );
	var blue = Math.floor(Math.random() * 256 );
	var rgbColor = 'rgb(' + red + ',' + green + ',' + blue + ')';
	return rgbColor;
}

for (i = 0; i < 10; i++) {
	html += '<div style="background-color:' + randomColor() + '"></div>';
}


document.write(html);