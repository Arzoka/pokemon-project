import { useEffect, useState } from 'react';
import { IRandomPokemonEncounter } from '../@types/CustomPokemonTypes/Encounters/RandomEncounter.ts';
import { IReceivedPokeball } from '../@types/CustomPokemonTypes/Pokeballs/IPokeball.ts';
import getPokeballs from '../utils/pokeballs/getPokeballs.ts';
import PokemonSprite from '../components/pokemon-sprite/index.tsx';
import getRandomEncounter from '../utils/pokemon/getRandomEncounter.ts';
import PokeballSelector from '../components/pokeball-selector/index.tsx';

function PokemonEncounter() {
	const [encounter, setEncounter] = useState<IRandomPokemonEncounter | null>(null);
	const [pokeballs, setPokeballs] = useState<IReceivedPokeball[]>([]);
	const [currentPokeball, setCurrentPokeball] = useState<IReceivedPokeball | null>(null);
	const [attemptingCatch, setAttemptingCatch] = useState(false);
	const [loading, setLoading] = useState(false);

	useEffect(() => {
		(
			async () => {
				const pokeballs = await getPokeballs();
				const encounter = await getRandomEncounter(setLoading);
				if (pokeballs) {
					setPokeballs(pokeballs);
					setCurrentPokeball(pokeballs[0]);
				}
				if (encounter) {
					setEncounter(encounter);
				}
			}
		)();
	}, []);


	if (loading) {
		return (
			<h1>Loading...</h1>
		);
	}

	return (
		<section style={ {
			background: 'black',
			position: 'relative',
			width: '100%',
			height: '100%',
		} }>
			{ encounter ? (
				<>
					<p>{ encounter.name } lvl{ encounter.level }</p>
					<PokemonSprite
						pokemon={ encounter }
						attemptingCatch={ attemptingCatch }
						pokeball={ currentPokeball }
					/>
				</>
			) : null }
			{ pokeballs && encounter ? (
				<PokeballSelector
					pokeballs={ pokeballs }
					currentPokeball={ currentPokeball }
					setCurrentPokeball={ setCurrentPokeball }
					attemptingCatch={ attemptingCatch }
					setAttemptingCatch={ setAttemptingCatch }
					encounter={ encounter }
				/>
			) : null }
		</section>
	);
}

export default PokemonEncounter;
