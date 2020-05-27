function sumOfAllOddNumbers(nums) {
  var counter = 0;
  for (var i = 0; i < nums.length; i++){
  	if (nums[i] % 2 == 1)
  		counter++;
  }
  return counter;
}

// Do not edit this line;
module.exports = sumOfAllOddNumbers;