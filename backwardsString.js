function FirstReverse(str) { 
    var backwards = '';
    var lastLetter = str.length - 1;
    for(var i = lastLetter; i >= 0; i--){
      backwards += str[i];
    }
  
  return backwards; 
         
}

FirstReverse('string goes here');