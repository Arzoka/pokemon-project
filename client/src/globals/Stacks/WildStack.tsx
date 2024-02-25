import { EnvironmentContextProvider } from '../contexts/EnvironmentContext.tsx';
import { PlayerContextProvider } from '../contexts/PlayerContext.tsx';
import { EncounterContextProvider } from '../contexts/EncounterContext.tsx';
import WildGameScreen from '../../pages/wild-game-screen.tsx';

const WildStack = () => (
	<EnvironmentContextProvider>
		<PlayerContextProvider>
			<EncounterContextProvider>
				<WildGameScreen />
			</EncounterContextProvider>
		</PlayerContextProvider>
	</EnvironmentContextProvider> );

export default WildStack;

