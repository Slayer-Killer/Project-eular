palin = []
for(i = 100; i <= 999; i++){
	for(j = 100; j <= 999; j++){
		if(i*j == parseInt((i*j).toString().split('').reverse().join(''))) palin.push(i*j)
	}
}

console.log(palin.sort(function(a, b){return a - b})[palin.length - 1])
