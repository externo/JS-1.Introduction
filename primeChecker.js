function isPrime(value) {
	if(value < 2) return false;
    for (var i = 2; i < value; i++) {
        if(value%i==0)
            return false;
    }
    return true;
}
console.log(isPrime(22));
console.log(isPrime(13));