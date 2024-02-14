import { EnvironmentTile } from '../@types/CustomPokemonTypes/Environment/tile.ts';

const API_URL = 'https://pokeapi.co/api/v2';
const AVAILABLE_TILES: EnvironmentTile[] = [
	{
		tile: 'grass_1',
		walkable: true,
		encounterCategory: null,
	},
	{
		tile: 'grass_2',
		walkable: true,
		encounterCategory: null,
	},
	{
		tile: 'grass_3',
		walkable: true,
		encounterCategory: null,
	},
	{
		tile: 'tall_grass',
		walkable: true,
		encounterCategory: 'grass',
	},
];

export {
	API_URL, AVAILABLE_TILES,
};
