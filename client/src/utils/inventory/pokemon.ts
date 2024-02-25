import { IRandomPokemonEncounter } from '../../@types/CustomPokemonTypes/Encounters/RandomEncounter.ts';

const pokemonInventory = {
	addPokemon: function ( pokemon: IRandomPokemonEncounter ) {
		const currentPokemon = JSON.parse( localStorage.getItem( 'pokemon' ) ?? '[]' );
		if ( currentPokemon.length > 0 ) {
			localStorage.setItem( 'pokemon', JSON.stringify( [...currentPokemon, pokemon] ) );
		} else {
			localStorage.setItem( 'pokemon', JSON.stringify( [pokemon] ) );
			return;
		}
	},
	getPokemon: function () {
		return JSON.parse( localStorage.getItem( 'pokemon' ) ?? '[]' );
	},
};

export default pokemonInventory;
