function doSomething() {
	let a = 5;

	if (a > 0) {
		let a = 0;

		console.log(a);
	}

	console.log(a);
}

doSomething(); // 0 5

/*
 * because let is block scope variable
 */
