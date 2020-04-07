function sayHi(name) {
	console.log('Hi', name);
}

sayHi('Bob'); // 'Hi Bob'
sayHi.bind(null, 'Bob'); //
sayHi.call(null, 'Bob'); // 'Hi Bob'
sayHi.apply(null, 'Bob'); // Error
