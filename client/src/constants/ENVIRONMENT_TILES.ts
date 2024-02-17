import { EnvironmentTile } from '../@types/CustomPokemonTypes/Environment/tile.ts';

const AVAILABLE_TILES: EnvironmentTile[] = [
	{
		tile: 'grass_1',
		walkable: true,
		encounterCategory: null,
	}, {
		tile: 'grass_2',
		walkable: true,
		encounterCategory: null,
	}, {
		tile: 'grass_3',
		walkable: true,
		encounterCategory: null,
	}, {
		tile: 'tall_grass',
		walkable: true,
		encounterCategory: 'grass',
	}, // {
	// 	tile: 'water',
	// 	walkable: false,
	// 	encounterCategory: null,
	// },
];

export default AVAILABLE_TILES;
