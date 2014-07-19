function calcSupply(age, max, amount) {
	var food = "meat";
	console.log( "%d kg of %s would be enough until I am %d years old.", (max-age)*365*amount, food, max);
}
calcSupply(38, 118, 0.5);