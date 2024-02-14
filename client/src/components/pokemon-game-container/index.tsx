import React from 'react';
import { EnvironmentTile } from '../../@types/CustomPokemonTypes/Environment/tile.ts';

interface PokemonGameContainerProps {
	environment: EnvironmentTile[][];
	children: React.ReactNode;
}

const PokemonGameContainer = (props: PokemonGameContainerProps) => {
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
				{ props.environment.map((row => row.map((tile, index) => (
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
			{ props.children }
		</div>
	);
};

export default PokemonGameContainer;
