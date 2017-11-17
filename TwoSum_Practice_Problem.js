var nums = [3, 2, 5];

var target = 6;
//Brute force exponential runtime solution
var twoSum = function(nums, target) {
    var results = [];
    for(var i = 0; i < nums.length; i++){
        for(var j = 1; j < nums.length; j++) {
            if(nums[i] + nums[j] === target){
                results.push(i, j)
                return results;
            }
        }
    }
};
//Binary search linear runtime solution 

function binarySearch (sortedArray, num) {
	var start = 0;
	var	end = sortedArray.length - 1;
	var	mid;

	while(start <= end) {
		mid = Math.floor((start + end)/2)
		if(num === sortedArray[mid]) {
			return mid;
		} else if (num < sortedArray[mid]) {
			end = mid - 1;
		} else if (num > sortedArray[mid]){
			start = mid + 1;
		}
	}
	return false;
}

function binarySearchTwoSum (array, sum) {
	var sorted = mergeSort(array);
	var results = [];
	var indices = {};

	for(var i = 0; i < sorted.length; i++) {
		var diff = sum - sorted[i];
		var binIndex = binarySearch(sorted, diff);

		if(binIndex && !indices[i] && !indices[binIndex]) {

			results.push([sorted[i],sorted[binIndex]]);
			indices[i] = true;
			indices[binIndex] = true;
		}
	}
	return results;
}