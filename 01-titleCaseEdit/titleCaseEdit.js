function titleCaseEdit(title) {

	//seperate words by spaces
	var words = title.split(' ');

	//find number of words
	var numWords = words.length;

	var firstLetter;
  	var upperLetter;
	var finalTitle = "";

	for (var i = 0; i < numWords; i++){

		//split the first letter off of word and assign it to a new string
		firstLetter = words[i].slice(0,1);
    	//console.log(firstLetter);

		//upperCase the single character
		upperLetter = firstLetter.toUpperCase();
    	//console.log(upperLetter);

		//re-attatch the split off letter with its parent
		//words[i] = upperLetter + words[i];

    	//ensure the lowercase character is removed for the uppercase character
    	words[i] = words[i].replace(firstLetter, upperLetter)
    	//console.log(words[i]);

		//concat the words in string array together into one single string
		finalTitle = finalTitle + " " + words[i];
	}

  	//trim() removes space at start and end of string
	return finalTitle.trim();
}

// Do not edit this line;
module.exports = titleCaseEdit;