const chalk = require('chalk');

const getOne = model => async () => {};

const o = {
	a: {
		name: 1,
		age: 12,
	},
};
const o2 = {
	a: {
		name: 1,
		age: {
			lao: 4,
		},
	},
};

console.log(chalk.blue({ ...o2, ...o }));
function expect(params) {
	return {
		toBe(actual) {
			if (actual !== params) {
				throw new Error("error!");
			} else {
                return 'ok';
                
            }r
		},
	};
}

const r = expect(1).toBe(1);
console.log(chalk.red(r));

