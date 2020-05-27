function fizzBuzz(start, end) {
	var fizz = "Fizz";
	var buzz = "Buzz";
	var fizz_buzz = "FizzBuzz";
	var arr = [];
	var n = start;

	for (var i = 0; i < end - start + 1; i++){
		if (n%3 == 0 && n%5 != 0){
			arr[i] = fizz;
		}
		else if (n%3 != 0 && n%5 == 0){
			arr[i] = buzz;
		}
		else if (n%3 == 0 && n%5 == 0){
			arr[i] = fizz_buzz;
		}
		else{
			arr[i] = n;
		}
		n++;
		//console.log(arr[i]);
	}
	return arr;
}

// Do not edit this line;
module.exports = fizzBuzz;