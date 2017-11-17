//Given a number N return the index value of the Fibonacci sequence, where the sequence is:
//0, 1, 1, 2, 3, 5, 8, 13, 21, 34, 55, 89, 144, ...


function fibonacci (num) {
	var a = 1; 
	var b = 0; 
	var temp; 

	while (num >= 0){
		temp = a;
		a = a + b;
		b = temp;
		num--;
	}
	return b;
}

//above doesnt work! do this 

function fibonacci(num) {
  if (num <= 1) return 1;

  return fibonacci(num - 1) + fibonacci(num - 2);
}

n = 0 = 0

recursive call
prep docs 
clean/concise
bug free
communication


