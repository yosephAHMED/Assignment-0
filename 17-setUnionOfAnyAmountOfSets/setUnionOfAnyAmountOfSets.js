function setUnionOfAnyAmountOfSets(...args) {
	//args[0] would be a set
	//args[n] would be a set aswell
	//we can create a new set and then just pass in the values of args[n]. This should give us the union.

	//empty set
	var unionSet = new Set();

	//iterate over all sets in the args array
	for (var i = 0; i < args.length; i++) {

		for (var elem of args[i]) {
			unionSet.add(elem);
		}

	}

	return unionSet; 

}

// Do not edit this line;
module.exports = setUnionOfAnyAmountOfSets;