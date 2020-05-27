function countOfAllBooleansAndStrings(arr) {
	var counter = 0;
	for (var i = 0; i < arr.length; i++){
		var temp = arr[i];
		if (typeof temp == "boolean" || typeof temp == "string")
			counter++;
	}
	return counter;
}

// Do not edit this line;
module.exports = countOfAllBooleansAndStrings;