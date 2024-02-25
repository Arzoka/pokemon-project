import axios from 'axios';
import { IPokemonMove } from '../../@types/PokeAPI/interfaces/Pokemon/Pokemon.ts';

async function getFullMove( move: IPokemonMove ) {
	return await axios.get( move.move.url ).then( ( response ) => {
		return response.data;
	} ).catch( ( error ) => {
		console.log( error );
	} );
}

async function getFullMoves( moves: IPokemonMove[] ) {
	let fullMoves = [];

	for ( let move of moves ) {
		let fullMove = await getFullMove( move );
		fullMoves.push( fullMove );
	}
	return fullMoves;
}

export { getFullMove, getFullMoves };
