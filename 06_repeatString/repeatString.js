const repeatString = function(str, times) {
	if(times < 0) return "ERROR";
	var string = "";
	for (i = 0; i < times; i++){
		string+=str;
	}
	return string;
};

// Do not edit below this line
module.exports = repeatString;
