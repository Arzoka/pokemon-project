import ReactDOM from 'react-dom/client';
import './index.css';
import EntryPoint from './EntryPoint';
import { StateWrapper } from './contexts/StateContext.tsx';
import { InventoryWrapper } from './contexts/InventoryContext.tsx';

ReactDOM.createRoot( document.getElementById( 'root' )! ).render(
	<StateWrapper>
		<InventoryWrapper>
			<EntryPoint />
		</InventoryWrapper>
	</StateWrapper> );
