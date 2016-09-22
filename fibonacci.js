module.exports = function fib(n) {

	  if (n===2) { 
	  	return [1,1];
	  }
	  if (n===1) {
	  	return [1];
	  }
	  let a = fib(n-1);
	  a[a.length] = fib(n-1)[fib(n-1).length -1] + fib(n-1)[fib(n-1).length -2];
	  return a;
}

