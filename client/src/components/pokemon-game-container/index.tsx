import { ReactNode, useContext } from 'react';
import { EnvironmentContext } from '../../contexts/EnvironmentContext.tsx';

const PokemonGameContainer = ({ children }: {
	children: ReactNode
}) => {
	const { environment } = useContext(EnvironmentContext);
	return (
		<div style={ {
			position: 'relative',
			width: '750px',
			height: '550px',
			border: '1px solid white',
		} }>
			<div style={ {
				position: 'absolute',
				width: '100%',
				height: '100%',
				padding: 0,
				margin: 0,
				background: 'black',
				zIndex: -1,
				display: 'grid',
				gridTemplateColumns: 'repeat(15, 1fr)',
				gridTemplateRows: 'repeat(11, 1fr)',
			} }>
				{ environment.map((
					row => row.map((tile, index) => (
						<img key={ index }
							src={ `resources/environment/${ tile.tile }.png` }
							alt={ `tile-${ index }-${ tile.tile }` }
							style={ {
								width: '100%',
								height: '100%',
							} }
						/>
					))
				)) }

			</div>
			{ children }
		</div>
	);
};

export default PokemonGameContainer;
