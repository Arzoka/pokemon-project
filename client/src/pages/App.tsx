import { useEffect, useState } from 'react';
import Player from '../entities/Player.ts';
import PlayerSprite from '../components/player-sprite';
import PokemonGameContainer from '../components/pokemon-game-container';
import getRandomEnvironment from '../helpers/environment/getRandomEnvironment.ts';
import calculateEncounter from '../helpers/environment/algorithms/calculateEncounters.ts';
import PokemonEncounter from './pokemon-encounter.tsx';
import useGameLoop from '../hooks/useGameLoop.ts';

function App() {
	const [playerState, setPlayerState] = useState({
		x: 0,
		y: 0,
		direction: 'down',
		canEncounter: false,
	});

	const [environment] = useState(getRandomEnvironment());
	const [currentEncounter, setCurrentEncounter] = useState(false);

	const player = new Player(environment);
	useGameLoop(player, setPlayerState);


	useEffect(() => {
		if (!playerState.canEncounter || currentEncounter) {
			return;
		}
		setCurrentEncounter(calculateEncounter);
	}, [playerState]);

	return (
		<>
			<PokemonGameContainer environment={ environment }>
				{ currentEncounter ? (
					<PokemonEncounter
						setCurrentEncounter={ setCurrentEncounter }
					/>
				) : (
					<PlayerSprite playerState={ playerState } />
				) }
			</PokemonGameContainer>

		</>
	);

}

export default App;
