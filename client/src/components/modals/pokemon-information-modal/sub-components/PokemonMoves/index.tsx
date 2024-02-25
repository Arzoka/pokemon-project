import { FC, useEffect, useState } from 'react';
import { IMove } from '../../../../../@types/PokeAPI/interfaces/Moves/Move.ts';
import { getFullMoves } from '../../../../../utils/pokemon/getFullMove.ts';
import { IPokemonMove } from '../../../../../@types/PokeAPI/interfaces/Pokemon/Pokemon.ts';

const PokemonMoves: FC<{
	receivedmoves: IPokemonMove[] | undefined
}> = ( { receivedmoves } ) => {
	const [moves, setMoves] = useState<IMove[]>( [] );
	const [loading, setLoading] = useState( true );

	useEffect( () => {
		if ( !receivedmoves ) {return;}

		( async () => {
			setLoading( true );
			const newreceivedmoves = await getFullMoves( receivedmoves );
			setMoves( newreceivedmoves );
			setLoading( false );
		} )();
	}, [receivedmoves] );

	return loading ?
		<p style={ { color: 'black' } }>Loading moves...</p> : (
			<div style={ { width: '75%' } }>
				{ moves ? moves.map( ( move, index ) => (
					<div style={ {
						display: 'flex',
						background: '#ccc',
						color: 'black',
					} } key={ index }>
						<h3>{ move?.name }</h3>
						<p>Accuracy: { move?.accuracy }</p>
						<p>Power: { move?.power }</p>
						<p>PP: { move?.pp }</p>
					</div> ) ) : null }
			</div> );
};

export default PokemonMoves;
