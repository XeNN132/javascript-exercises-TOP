const sumAll = function(intA, intB) {
	if (!(Array.from(arguments).every( (val) => Number.isInteger(val) && val > 0)))
		return "ERROR"
	
	return ((intA + intB)/2) * (Math.abs(intA - intB ) + 1)


};

// Do not edit below this line
module.exports = sumAll;
