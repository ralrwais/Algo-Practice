

//naive approach, doesnt work for all test cases
// var rome = ['I', 'V', 'X', 'L', 'C', 'D', 'M'];


var romeToNum;
var romanToInt = function(s) {
    var results = 0;
    for(var i = 0; i < s.length; i++){
        var rome = s[i];
        romeHelper(rome);
        results += romeToNum;     
    }  return results;  
};

//"MCMXCVI"
function romeHelper (rome) {
        if (rome === 'I'){
            romeToNum = 1;
        }
         if (rome === 'V'){
          romeToNum = 5;
        }
         if (rome === 'X'){
            romeToNum = 10;
        }
         if (rome === 'L'){
            romeToNum = 50;
        }
         if (rome === 'C'){
            romeToNum = 100;
        }
         if (rome === 'D'){
            romeToNum = 500;
        }
         if (rome === 'M'){
            romeToNum = 1000;
        }  
    return romeToNum;
}


//better solution: using a hash table 

var romanToInt = function(s) {
    var hash = {
        'I': 1,
        'V': 5,
        'X': 10,
        'L': 50,
        'C': 100,
        'D': 500,
        'M': 1000
    };
    var lastChar = hash[s.charAt(0)];
    var r = 0;
    for (var i = 0, l = s.length; i <= l - 1; ++i) {

        var currentChar = hash[s.charAt(i)];

            if (lastChar < currentChar) {
                r += currentChar - lastChar - lastChar;
            } else {
                r += currentChar;
            }
        lastChar = currentChar;
    }
    return r;
};