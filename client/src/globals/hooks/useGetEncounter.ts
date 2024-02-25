import React, { useContext, useEffect } from 'react';
import getPokeballs from '../../utils/pokeballs/getPokeballs.ts';
import getRandomEncounter from '../../utils/pokemon/getRandomEncounter.ts';
import { EncounterContext } from '../contexts/EncounterContext.tsx';
import { EnvironmentContext } from '../contexts/EnvironmentContext.tsx';
import { IReceivedPokeball } from '../../@types/CustomPokemonTypes/Pokeballs/IPokeball.ts';

interface useGetEncounterProps {
	setPokeballs: React.Dispatch<React.SetStateAction<IReceivedPokeball[]>>;
	setCurrentPokeball: React.Dispatch<React.SetStateAction<IReceivedPokeball | null>>;
	setLoading: React.Dispatch<React.SetStateAction<boolean>>;
}

export const useGetEncounter = ( props: useGetEncounterProps ) => {
	const {
		setPokeballs,
		setCurrentPokeball,
		setLoading,
	} = props;
	const { setEncounter } = useContext( EncounterContext );
	const { setMusic } = useContext( EnvironmentContext );

	useEffect( () => {
		( async () => {
				const pokeballs = await getPokeballs();
				const encounter = await getRandomEncounter( setLoading );
				if ( pokeballs ) {
					setPokeballs( pokeballs );
					setCurrentPokeball( pokeballs[0] );
				}
				if ( encounter ) {
					setEncounter( encounter );
					if ( ['legendary', 'mythical'].includes( encounter.rarity_type ) ) {
						console.log( 'LegendaryMusic' );
						setMusic( 'LegendaryMusic' );
					} else {
						console.log( 'WildPokemonMusic' );
						setMusic( 'WildPokemonMusic' );
					}
				}
			} )();
	}, [] );
};
