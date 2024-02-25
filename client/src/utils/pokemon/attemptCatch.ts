import calculatePokemonCatch from './algorithms/calculatePokemonCatch.ts';
import { IRandomPokemonEncounter } from '../../@types/CustomPokemonTypes/Encounters/RandomEncounter.ts';
import { IReceivedPokeball } from '../../@types/CustomPokemonTypes/Pokeballs/IPokeball.ts';
import pokemonInventory from '../inventory/pokemon.ts';
import { Dispatch, SetStateAction } from 'react';
import { InventoryType } from '../../@types/CustomPokemonTypes/Inventory/InventoryType.ts';

function attemptCatch( encounter: IRandomPokemonEncounter | null, pokeball: IReceivedPokeball, setAttemptingCatch: ( attemptingCatch: boolean ) => void, setCurrentEncounter: ( currentEncounter: boolean ) => void, setInventory: Dispatch<SetStateAction<InventoryType>> ) {

	if ( !encounter ) {
		return;
	}
	const catchTime = Math.random() * 3000 + 1000;

	setAttemptingCatch( true );
	const caught = calculatePokemonCatch( encounter, pokeball );
	setTimeout( () => {
		setAttemptingCatch( false );
		encounter.caught = caught;
		if ( caught ) {
			pokemonInventory.addPokemon( encounter );
			alert( `You caught a ${ encounter.name }!` );
			setInventory( { pokemon: pokemonInventory.getPokemon() } );
			setCurrentEncounter( false );
		}
	}, catchTime );

}

export default attemptCatch;
