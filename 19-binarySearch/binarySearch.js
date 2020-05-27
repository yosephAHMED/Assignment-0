class MySolution {
  constructor() {
    this.flag = false;
  }

  binarySearch(nums, target){
  	//round down
  	var mid = Math.floor(nums.length/2);

  	var tArray = nums;

  	//target found at mid pos
  	if (nums[mid] == target){
  		return true;
  	}

  	//target is on LHS
  	else if (nums[mid] > target){
  		tArray = nums.slice(0, mid);
  		return this.binarySearch(tArray, target);
  	}

  	//target is on RHS
  	else if (nums[mid] < target){
  		tArray = nums.slice(mid + 1, nums.length);
  		return this.binarySearch(tArray, target);
  	}
  	//not found target
  	return false;
  }

}

// Do not edit this line;
let StudentSolution = MySolution;
module.exports = StudentSolution;