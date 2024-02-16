function generateEVs() {
	const maxIV = 0;
	const values = ['hp', 'atk', 'def', 'spA', 'spD', 'spd'];

	const EVs: {
		[key: string]: number
	} = {};

	values.forEach(value => {
		EVs[value] = Math.floor(Math.random() * (
			maxIV + 1
		));
	});

	return EVs;
}

export default generateEVs;
