import App
	from './pages/App.tsx';
import {
	EnvironmentContextProvider,
} from './contexts/EnvironmentContext.tsx';
import {
	PlayerContextProvider,
} from './contexts/PlayerContext.tsx';

const Stack = () => (
	<EnvironmentContextProvider>
		<PlayerContextProvider>
			<App />
		</PlayerContextProvider>
	</EnvironmentContextProvider>);

export default Stack;

