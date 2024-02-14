function getCatchRateMultiplier(pokeball: string) {
	switch (pokeball) {
		case 'poke-ball':
			return 1;
		case 'great-ball':
			return 1.5;
		case 'ultra-ball':
			return 2;
		case 'master-ball':
			return 255;
		case 'safari-ball':
			// TODO: Safari zone mechanics
			return 1.5; // specific catch rate for Safari Ball
		case 'park-ball':
			return 255;
		case 'sport-ball':
			// TODO: Sport ball mechanics
			return 1.5; // specific catch rate for Sport Ball
		default:
			console.log('Unknown Poké Ball:', pokeball, 'Defaulting to 1');
			return 1;
	}
}

export default getCatchRateMultiplier;
