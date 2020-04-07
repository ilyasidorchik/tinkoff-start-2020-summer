const readline = require('readline');

const rl = readline.createInterface({
	input: process.stdin,
	output: process.stdout,
});

/**
 * @param {string} data
 * @return {number}
 */
function countWords(data) {
	const words = data.split(' ').filter((word) => word !== '-');

	return words.length;
}

rl.on('line', (data) => {
	const result = countWords(data);

	console.log(result);
	rl.close();
});
