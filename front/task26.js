function foo() {
	var a = 1;

	if (a > 0) {
		var a = 2;
	}

	console.log(a);
}

foo(); // 2
