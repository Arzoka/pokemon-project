import { useContext, useState } from 'react';
import { InventoryContext } from '../../globals/contexts/InventoryContext.tsx';
import PokemonListItem from './sub-components/pokemon-list-item';

const Bag = () => {
	const { inventory } = useContext( InventoryContext );
	const [page, setPage] = useState( 1 );

	function switchPage( direction: string ) {
		if ( !inventory.pokemon ) {
			return;
		}

		if ( direction === 'prev' ) {
			if ( page === 1 ) {
				return;
			}
			setPage( page - 1 );
		}
		if ( direction === 'next' ) {
			if ( inventory.pokemon.length > 6 * page ) {
				setPage( page + 1 );
			}
		}
	}

	return (
		<div style={ {
			width: 750,
			marginLeft: '0.5em',
		} }>
			<ul style={ {
				height: 500,
				width: '100%',
				display: 'grid',
				gridTemplateColumns: 'repeat(2, 1fr)',
				gap: 10,
			} }>
				{ inventory.pokemon ? inventory.pokemon.map( ( pokemon, index ) => {
					if ( index >= 6 * ( page - 1 ) && index < 6 * page ) {
						return (
							<PokemonListItem pokemon={ pokemon } key={ index } /> );
					}
				} ) : null }
			</ul>
			<div style={ {
				display: 'flex',
				width: '100%',
				justifyContent: 'space-between',
				marginTop: 5,
			} }>
				<button onClick={ () => switchPage( 'prev' ) } style={ {
					width: '40%',
					padding: 10,
				} }>prev
				</button>
				<button onClick={ () => switchPage( 'next' ) } style={ {
					width: '40%',
					padding: 10,
				} }>next
				</button>
			</div>

		</div> );
};

export default Bag;
