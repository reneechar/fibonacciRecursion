let cache = {};

function mfib(n) {
	if(!cache.hasOwnProperty(n)){
		cache[n]= fib(n);
	}
	return cache[n];
}


function fib(n) {

	  if (n===2) { 
	  	let arr = mfib(1)
	  	arr.push(1);
	  	return arr;
	  }
	  if (n<=1) {
	  	return [1];
	  }

	  let resultArr = mfib(n-1);
	  resultArr.push(mfib(n-1)[n-2] + mfib(n-1)[n-3]);
	  return resultArr;
}


console.log('fib(9)',fib(9));
