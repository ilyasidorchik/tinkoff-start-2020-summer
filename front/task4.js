var a = 1;

function b() {
	a = 2;

	var a = 3;
}

b();
console.log(a); // 1

// because call of b() doesnt' affect a
