function checkDigit(value) {
	var str = ""+value;
	if (str.charAt(str.length-3)=="3"){
		return true;
	}
	return false;
}
console.log(checkDigit(25368));
console.log(checkDigit(1111));