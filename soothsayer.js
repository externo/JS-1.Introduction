function soothsayer(value) {
	var zero = Math.floor((Math.random() * 5) );
	var first = Math.floor((Math.random() * 5) );
	var second = Math.floor((Math.random() * 5) );
	var third = Math.floor((Math.random() * 5) );
	console.log("You will work %d years on %s.", value[0][zero].toString(), value[1][first].toString());
	console.log("You will live in %s and drive %s.", value[2][second], value[3][third]);
}
	
soothsayer([[3, 5, 2, 7, 9], ["Java", "Python", "C#", "JavaScript", "Ruby"], ["Silicon Valley", "London", "Las Vegas", "Paris", "Sofia"], ["BMW", "Audi", "Lada", "Skoda", "Opel"]]);