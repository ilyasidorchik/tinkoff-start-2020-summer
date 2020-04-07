const readline = require('readline');

const rl = readline.createInterface({
	input: process.stdin,
	output: process.stdout,
});

/**
 * @param {string} data
 * @return {number}
 */
function getMinCount(data) {
	const words = data.split(' ').filter((word) => word !== '-');

	return words.length;
}

// const result = getMinCount(data);
rl.on('line', (x) => {
	console.log(x);

	// rl.close();
});

rl.on('line', (y) => {
	console.log(y);

	rl.close();
});
