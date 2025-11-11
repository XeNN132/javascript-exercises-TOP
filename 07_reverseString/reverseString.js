const reverseString = function( inputString ) {
	const lengthOfInputString = inputString.length;
	var newString = Array.from(inputString) ;
	for (var i = 1; i <= lengthOfInputString; i++){
		newString[i - 1] = inputString[lengthOfInputString - i];
	}
	return newString.join('');
};

// Do not edit below this line
module.exports = reverseString;
