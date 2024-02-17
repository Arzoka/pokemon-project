import { useContext } from 'react';
import PlayerSprite from '../components/player-sprite';
import PokemonGameContainer from '../components/pokemon-game-container';
import PokemonEncounter from './pokemon-encounter.tsx';
import useGameLoop from '../globals/hooks/useGameLoop.ts';
import { EnvironmentContext } from '../globals/contexts/EnvironmentContext.tsx';
import useEncounter from '../globals/hooks/useEncounter.ts';

function App() {
	const {
		currentEncounter,
	} = useContext(EnvironmentContext);

	useEncounter();
	useGameLoop();

	return (
		<>
			<PokemonGameContainer>
				{ currentEncounter ? (
					<PokemonEncounter />
				) : (
					<PlayerSprite />
				) }
			</PokemonGameContainer>

		</>
	);

}

export default App;
