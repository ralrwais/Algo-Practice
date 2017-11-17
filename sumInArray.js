//Given an array of  integers, can you find the sum of its elements?

//The first line contains an integer, , denoting the size of the array. 
//The second line contains  space-separated integers representing the array's elements.

//n = 6
//ar = 1,2,3,4,10,11
//expected output : 31


function simpleArraySum(n, ar) {
    // Complete this function
        var total=0;
        for( var i = 0; i < ar.length; i++){
           total += ar[i];
    } return total;
}
