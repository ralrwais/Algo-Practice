//write a function that returns true if a string is a palindrome and false if it isnt
//It should take in a string and return a boolean 

	function isPalindrome (str){
	var lastIndex = str.length - 1;
//It should loop through the string (as if it were an array) to check each letter
	for(var i=0; i<str.length; i++){
//stopping the loop when both index and lastindex are on the same position
		if(i === (lastIndex - i)){
			break;
		}
//it should compare the letter on the first index of the string, to the letter on the last index, and move inward until it reaches the same index
		if(str[i] !== str[lastIndex - i]) {

//it should return false for a non palindrome
			return false;
		}
	}
//it should return true if the string is a palindrome
	return true;
}

// CHECKING A NUMBER TO SEE IF ITS A PALINDROME
var isPalindrome = function(x) {
    var str = x.toString();
    var lastIndex = str.length - 1;
    for(var i = 0; i < str.length; i++){
        if (i === lastIndex - i){
            break;
        }
        if (str[i] !== str[lastIndex - i]){
            return false;
        }  
    }
    return true;
};