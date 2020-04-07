function a() {
	return 0;
}

function b() {
	return '';
}

function c() {
	return [];
}

function d() {
	return true;
}

console.log(a() || b() || c() || d()); // []

// because logs the first true value:
// array has object type and object is always true
