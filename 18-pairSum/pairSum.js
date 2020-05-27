function pairSum(nums, target) {
	//from what I understand
	//we have to check any number of combinations of elements 
	//to see if they match with target
	var found = false;

	if (nums.length <= 1){
		throw "Array size too small";
	}
	
	//nested for-loop to compare our base element with its siblings
	for (var i = 0; i < nums.length; i++){
		//if we haven't found a match yet, then keep going (efficiency)
		if (!found){
			for (var j = i + 1; j < nums.length; j++){
				if (nums[i] + nums[j] == target){
					found = true;
				}
			}
		}
		else
			break;
	}
	return found;
}

// Do not edit this line;
module.exports = pairSum;