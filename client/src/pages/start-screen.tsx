import { StateContext } from '../globals/contexts/StateContext.tsx';
import { useContext } from 'react';

const StartScreen = () => {
	const { setState } = useContext( StateContext );

	return (
		<section style={ {
			display: 'flex',
			flexDirection: 'column',
			alignItems: 'center',
			justifyContent: 'center',
			gap: '5rem',
			height: '100vh',
		} }>
			<button style={ {
				fontSize: '2rem',
				padding: '1rem 2rem',
				width: '40%',
			} } onClick={ () => setState( 'wild-area' ) }>Go to wild area
			</button>
			<button style={ {
				fontSize: '2rem',
				padding: '1rem 2rem',
				width: '40%',
			} } onClick={ () => alert( 'Coming soon!' ) }>Battle (coming soon)
			</button>
		</section> );
};

export default StartScreen;
