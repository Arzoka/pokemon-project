import { IRandomPokemonEncounter } from '../../../@types/CustomPokemonTypes/Encounters/RandomEncounter.ts';
import { IReceivedPokeball } from '../../../@types/CustomPokemonTypes/Pokeballs/IPokeball.ts';

function calculatePokemonCatch( pokemon: IRandomPokemonEncounter, pokeball: IReceivedPokeball ) {
	if ( !pokemon.capture_rate || !pokeball.catch_rate_multiplier ) {
		return false;
	}

	const pokemonCatchRate = pokemon.capture_rate;
	const pokeballCatchRateMultiplier = pokeball.catch_rate_multiplier;

	// TODO: Replace 1 with status effect multiplier
	const a = ( ( 3 * pokemon.stats.hp - 2 * pokemon.current_hp ) / ( 3 * pokemon.stats.hp ) ) * pokemonCatchRate * pokeballCatchRateMultiplier * 1;
	const rng = Math.random() * 255;
	console.log( a, rng );
	return rng < a;

}

export default calculatePokemonCatch;
