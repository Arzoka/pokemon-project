import ReactDOM from 'react-dom/client';
import './index.css';
import EntryPoint from './EntryPoint';
import { StateWrapper } from './contexts/StateContext.tsx';

ReactDOM.createRoot(document.getElementById('root')!).render(
	<StateWrapper>
		<EntryPoint />
	</StateWrapper>
);
