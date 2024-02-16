import {
	useContext,
} from 'react';
import PlayerSprite
	from '../components/player-sprite';
import PokemonGameContainer
	from '../components/pokemon-game-container';
import PokemonEncounter
	from './pokemon-encounter.tsx';
import useGameLoop
	from '../hooks/useGameLoop.ts';
import {
	EnvironmentContext,
} from '../contexts/EnvironmentContext.tsx';
import useEncounter
	from '../hooks/useEncounter.ts';

function App() {
	const { currentEncounter, environment } = useContext(EnvironmentContext);

	useEncounter();
	useGameLoop();

	return (<>
		<PokemonGameContainer environment={ environment }>
			{ currentEncounter ? (
				<PokemonEncounter />) : (
				<PlayerSprite />) }
		</PokemonGameContainer>

	</>);

}

export default App;
