factors = []; a = 13195;

function cprime(x){
	for(i = 2; i < x; i++)
	{
		if(x % i == 0) {
			return 1;
		}
	}
	return x;
}

for(i = 2; i <= a/2; i++){
	if(a % i == 0) {
		if(cprime(i) != 1) factors.push() 
	}
}
console.log(factors)