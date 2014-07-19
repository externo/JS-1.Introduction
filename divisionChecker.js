function divisionBy3(value) {
	var str = value.toString();
	var sum = 0;
	for (var i = 0; i < str.length; i++) {
		sum += parseInt(str.charAt(i), 10);
	}
	if (sum%3==0){
		console.log("the number is divided by 3 without remainder");
	}else{
		console.log("the number is not divided by 3 without remainder");
	}
}
divisionBy3(222);
divisionBy3(11213);