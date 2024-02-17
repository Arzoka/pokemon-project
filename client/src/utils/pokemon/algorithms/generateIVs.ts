function generateIVs() {
	const maxIV = 31;
	const values = ['hp', 'atk', 'def', 'spA', 'spD', 'spd'];

	const IVs: {
		[key: string]: number
	} = {};

	values.forEach(value => {
		IVs[value] = Math.floor(Math.random() * (
			maxIV + 1
		));
	});

	return IVs;
}

export default generateIVs;
