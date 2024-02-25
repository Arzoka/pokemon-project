import { useContext, useState } from 'react';
import { IReceivedPokeball } from '../@types/CustomPokemonTypes/Pokeballs/IPokeball.ts';
import PokemonSprite from './pokemon-sprite';
import PokeballSelector from './pokeball-selector';
import { useGetEncounter } from '../globals/hooks/useGetEncounter.ts';
import { EncounterContext } from '../globals/contexts/EncounterContext.tsx';

function PokemonEncounter() {
	const [pokeballs, setPokeballs] = useState<IReceivedPokeball[]>( [] );
	const [currentPokeball, setCurrentPokeball] = useState<IReceivedPokeball | null>( null );
	const [loading, setLoading] = useState( false );
	const { Encounter } = useContext( EncounterContext );

	useGetEncounter( {
		setPokeballs,
		setCurrentPokeball,
		setLoading,
	} );


	if ( loading ) {
		return (
			<h1>Loading...</h1> );
	}

	return (
		<section style={ {
			background: 'black',
			position: 'relative',
			width: '100%',
			height: '100%',
		} }>
			{ Encounter ? ( <>
					<p>{ Encounter.name } lvl{ Encounter.level }</p>
					<PokemonSprite
						pokeball={ currentPokeball }
					/>
				</> ) : null }
			{ pokeballs && Encounter ? (
				<PokeballSelector
					pokeballs={ pokeballs }
					currentPokeball={ currentPokeball }
					setCurrentPokeball={ setCurrentPokeball }
				/> ) : null }
		</section> );
}

export default PokemonEncounter;
