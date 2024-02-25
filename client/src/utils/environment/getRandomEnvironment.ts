import getRandomEnvironmentTile from './getRandomEnvironmentTile.ts';

function getRandomEnvironment( xSize: number = 15, ySize: number = 11 ) {
	const environment = [];
	for ( let y = 0; y < ySize; y++ ) {
		const row = [];
		for ( let x = 0; x < xSize; x++ ) {
			row.push( getRandomEnvironmentTile() );
		}
		environment.push( row );
	}
	return environment;
}

export default getRandomEnvironment;
