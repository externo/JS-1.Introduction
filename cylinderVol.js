function calcCylinderVol(radius, height) {
	return Math.PI*Math.pow(radius, 2)*height;
}
console.log(calcCylinderVol(2,4).toFixed(3));