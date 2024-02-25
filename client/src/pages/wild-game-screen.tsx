import RandomEnvironment from '../components/random-environment.tsx';
import Bag from '../components/bag';
import PokemonInformationModal from '../components/modals/pokemon-information-modal';
import { useContext } from 'react';
import { InventoryContext } from '../globals/contexts/InventoryContext.tsx';

const WildGameScreen = () => {
	const { viewingPokemon } = useContext( InventoryContext );

	return (
		<div style={ {
			display: 'flex',
			flexDirection: 'row',
		} }>
			{ viewingPokemon ?
				<PokemonInformationModal pokemon={ viewingPokemon } /> : null }
			<RandomEnvironment />
			<Bag />
		</div> );
};

export default WildGameScreen;
