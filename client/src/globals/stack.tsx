import App from '../pages/App.tsx';
import { EnvironmentContextProvider } from './contexts/EnvironmentContext.tsx';
import { PlayerContextProvider } from './contexts/PlayerContext.tsx';
import { EncounterContextProvider } from './contexts/EncounterContext.tsx';

const Stack = () => (
	<EnvironmentContextProvider>
		<PlayerContextProvider>
			<EncounterContextProvider>
				<App />
			</EncounterContextProvider>
		</PlayerContextProvider>
	</EnvironmentContextProvider>
);

export default Stack;

