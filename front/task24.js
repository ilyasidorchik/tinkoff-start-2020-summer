let user = {
	name: 'Ann',
	sayHi: function () {
		console.log('Hi, I am ', this.name);
	},
};

user.sayHi.name = 'Bob';

let sayHi = user.sayHi;

sayHi(); // 'Hi, I am undefined'

// because there is no name in sayHi
