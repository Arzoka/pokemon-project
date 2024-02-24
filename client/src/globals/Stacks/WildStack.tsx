import { EnvironmentContextProvider } from '../contexts/EnvironmentContext.tsx';
import { PlayerContextProvider } from '../contexts/PlayerContext.tsx';
import { EncounterContextProvider } from '../contexts/EncounterContext.tsx';
import RandomEnvironment from '../../pages/random-environment.tsx';

const WildStack = () => (
	<EnvironmentContextProvider>
		<PlayerContextProvider>
			<EncounterContextProvider>
				<RandomEnvironment />
			</EncounterContextProvider>
		</PlayerContextProvider>
	</EnvironmentContextProvider>
);

export default WildStack;

