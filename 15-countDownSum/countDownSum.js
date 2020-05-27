class MySolution {
  countDownSum(num) {
    if (num == 1)
    	return 1;
    else if (num != 0)
    	return (num + this.countDownSum(num-1));
  }
}

// Do not edit this line;
let StudentSolution = MySolution;
module.exports = StudentSolution;