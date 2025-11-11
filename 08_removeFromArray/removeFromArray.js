const removeFromArray = function(arr, ...exclusions) {
	for( var exclusion of exclusions ){
		arr = arr.filter((element) => (element !== exclusion))
	}
	
	return arr;
};

// Do not edit below this line
module.exports = removeFromArray;
