import { IRandomPokemonEncounter } from '../../../../@types/CustomPokemonTypes/Encounters/RandomEncounter.ts';
import styles from './pokemon-list-item.module.scss';
import { FC, useContext } from 'react';
import { InventoryContext } from '../../../../globals/contexts/InventoryContext.tsx';

const PokemonListItem: FC<{
	pokemon: IRandomPokemonEncounter
}> = ( { pokemon } ) => {
	const { setViewingPokemon } = useContext( InventoryContext );
	return (
		<button onClick={ () => {
			setViewingPokemon( pokemon );
		} } className={ styles.ListItem }>
			<img src={ pokemon.shiny ? pokemon.sprites.front_shiny : pokemon.sprites.front_default } alt={ pokemon.name } />
			<div>
				<p>
					{ pokemon.name }
				</p>
				<p>
					lvl { pokemon.level }
				</p>
			</div>
		</button> );
};

export default PokemonListItem;
