const readline = require('readline');

const rl = readline.createInterface({
	input: process.stdin,
	output: process.stdout,
});

/**
 * @param {string} data
 * @return {string}
 */
function chooseRoom(data) {
	const dataArr = data.split(' ');
	const a = dataArr[0],
		b = dataArr[1],
		c = dataArr[2],
		d = dataArr[3];

	const choice1 = a * b;
	const choice2 = c * d;

	if (choice1 > choice2) return 'M';
	else if (choice1 < choice2) return 'P';
	else return 'E';
}

rl.on('line', (data) => {
	const result = chooseRoom(data);

	console.log(result);
	rl.close();
});
