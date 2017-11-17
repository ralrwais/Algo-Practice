function LongestWord(sen) { 
	
    var longer = '';
    var splitSen = sen.split(' ');
    for (var i = 0; i < splitSen.length; i ++){
        if(splitSen[i].length > longer.length){
            longer = splitSen[i];
        }
    }  
  return longer; 
         
}
   
LongestWord('sentence goes here');