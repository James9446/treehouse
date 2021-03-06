
var inStock = [ 'apples', 'eggs', 'milk', 'cookies', 'cheese', 'bread', 'lettuce', 'carrot', 'broccoli', 'pizza', 'potato', 'crackers', 'onion', 'tofu', 'frozen dinner', 'cucumber'];
var search;

function print(message) {
  document.write( '<p>' + message + '</p>');
}

while (true) {
	search = prompt("Search for a product in our store. Type 'list' to show all of the products and type 'quit' to exit.")
	search = search.toLowerCase();
	if (search === 'quit') {
		break;
	} else if (search === 'list') {
		print(inStock.join(", "));
		break;
	} else {
		if (inStock.indexOf(search) > -1) {
			print("Yes we have " + search + " in stock.")
			break;
		} else {
			print("Sorry we do not have " + search + " in stock.")
			break;
		}
	}
}