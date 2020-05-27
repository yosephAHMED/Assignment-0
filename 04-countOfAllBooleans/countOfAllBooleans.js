function countOfAllBooleans(arr) {
	var counter = 0;
	for (var i = 0; i < arr.length; i++){
		if (arr[i] === true || arr[i] === false){
			counter++;
		}
  	}
  	return counter;
}

// Do not edit this line;
module.exports = countOfAllBooleans;