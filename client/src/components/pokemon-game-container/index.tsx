import { ReactNode, useContext } from 'react';
import { EnvironmentContext } from '../../globals/contexts/EnvironmentContext.tsx';
import styles from './pokemon-game-container.module.scss';

const PokemonGameContainer = ({ children }: {
	children: ReactNode
}) => {
	const { environment } = useContext(EnvironmentContext);
	return (
		<div className={ styles.PokemonGameContainerWrapper }>
			<div className={ styles.EnvironmentGrid }>
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
