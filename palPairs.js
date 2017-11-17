// words that we compare to see which combination makes a palindrome
var words = ["abcd", "dcba", "lls", "s", "sssll"];
// function takes in words and loops through each word
function palPairs(words){
	var indexCombos = [];
// outer loop
	for(var i = 0; i < words.length - 1; i++){
// loops through the next item in the array to compare to the first time
// inner loop
		for(var x = i + 1; x < words.length; x++){
// combine both words in each index to check for a palindrome pair
			var combination = words[i] + words[x];
			var combination2 = words[x] + words[i];
// condition: run isPalindrome function and verify if combined word is a palindrome
			if (isPalindrome(combination)) {
				indexCombos.push([i, x]);
			} 
			if(isPalindrome(combination2)) {
				indexCombos.push([x, i]);
			}
		} 
	}
	return indexCombos;
} 

// function that takes in a string and checks if its a pal
function isPalindrome(str) {
	str = str.split(' ').join('');
	str = str.toLowerCase();
	var lastIndex = str.length - 1;
	for(var i =0; i<str.length; i++){
		if(i === lastIndex - i){
			break;
		}
		if (str[i] !== str[lastIndex - i]){
			return false;
		} 
	} 
	return true;
}