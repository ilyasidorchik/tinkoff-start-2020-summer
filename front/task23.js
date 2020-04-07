var a = 1;

function f1() {
	console.log(a);
}

function f2() {
	var a = 2;

	f1();
}

f2();

// 1
