function productOfAnyAmountOfNumbers(...args) {
	var quotient = 1;
	for (var i = 0; i < args.length; i++){
		quotient = quotient * args[i];
	}
	return quotient;
}

// Do not edit this line;
module.exports = productOfAnyAmountOfNumbers;