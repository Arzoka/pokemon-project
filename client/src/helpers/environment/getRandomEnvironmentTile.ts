import {
	AVAILABLE_TILES,
} from '../../constants/index.ts';

function getRandomEnvironmentTile() {
	return {
		...AVAILABLE_TILES[Math.floor(Math.random() * AVAILABLE_TILES.length)],
		steppedOn: false,
	};
}


export default getRandomEnvironmentTile;
