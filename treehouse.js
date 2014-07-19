function treeHouseCompare(a, b) {
	var house = a*a+a*(a-1)/2;
	var tree = b+Math.pow((b+1)/2, 2)*Math.PI;
	if (house>tree){
		console.log("house/%d", house.toFixed(2));
	}else{
		console.log("tree/%d", tree.toFixed(2));
	}
}
treeHouseCompare(2,4);
treeHouseCompare(6,4);