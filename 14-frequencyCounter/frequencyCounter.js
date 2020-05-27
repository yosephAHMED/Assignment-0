function frequencyCounter(word) {
	//let letterMap = new Map()
	//var letters = word.split("");

	/*for (var i = 0; i < letters.length; i++){
		if (letterMap.prototype.has(letters[i])){
			letterMap.prototype.set(letters[i], letterMap.prototype.get([letters[i]) + 1);
		}
		else{
			letterMap.prototype.set(letters[i], 1);
		}
	}
*/
	
	// The string
	var str = word;

	// A map (in JavaScript, an object) for the character=>count mappings
	var counts = {};

	// Misc vars
	var ch, index, len, count;

	// Loop through the string...
	for (index = 0, len = str.length; index < len; ++index) {
    	// Get this character
    	ch = str.charAt(index); // Not all engines support [] on strings

    	// Get the count for it, if we have one; we'll get `undefined` if we
    	// don't know this character yet
    	count = counts[ch];

    	// If we have one, store that count plus one; if not, store one
    	// We can rely on `count` being falsey if we haven't seen it before,
    	// because we never store falsey numbers in the `counts` object.
    	counts[ch] = count ? count + 1 : 1;
	}	
	return counts;
}

// Do not edit this line;
module.exports = frequencyCounter;