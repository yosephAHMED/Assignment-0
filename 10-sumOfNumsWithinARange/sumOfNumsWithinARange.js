function sumOfNumsWithinARange(nums, start, end) {
  var counter = 0;
  for (var i = 0; i < nums.length; i++){
  	if (nums[i] >= start && nums[i] <= end){
  		counter++;
  	}
  }
  return counter;
}

// Do not edit this line;
module.exports = sumOfNumsWithinARange;