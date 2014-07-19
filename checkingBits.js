function bitChecker(value) {
	var mask = value>>3;
	if (mask&1==1){
		return true;
	}
	return false;
}
console.log(bitChecker(333));
console.log(bitChecker(2));