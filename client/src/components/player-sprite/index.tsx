import { useContext } from 'react';
import { PlayerContext } from '../../globals/contexts/PlayerContext.tsx';
import styles from './player-sprite.module.scss';

const PlayerSprite = () => {
	const { Player } = useContext(PlayerContext);

	return (
		<div
			className={ styles.PlayerSpriteWrapper }
			style={ {
				left: Player?.x,
				top: Player?.y,
			} }>
			<img
				className={ styles.PlayerSprite }
				src={ `resources/characters/player/${ Player?.direction }.png` }
				alt="player sprite"
			/>
		</div>
	);
};

export default PlayerSprite;
