const promise = Promise.reject('a')
	.then((x) => x + 'b')
	.catch((x) => x + 'd')
	.catch((x) => x + 'e')
	.then((x) => x + 'g');

promise.then((x) => console.log(x)); // adg
