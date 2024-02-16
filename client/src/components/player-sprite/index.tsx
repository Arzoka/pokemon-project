import {
	useContext,
} from 'react';
import {
	PlayerContext,
} from '../../contexts/PlayerContext.tsx';

const PlayerSprite = () => {
	const { Player } = useContext(PlayerContext);

	return (
		<div style={ {
			position: 'absolute', width: '50px', height: '50px', aspectRatio: 1 / 1, left: Player?.x, top: Player?.y, display: 'grid', placeItems: 'center',
		} }>
			<img
				style={ {
					width: '90%', objectFit: 'contain', translate: '0 -20%',
				} }
				src={ `resources/characters/player/${ Player?.direction }.png` }
				alt="player sprite"
			/>
		</div>);
};

export default PlayerSprite;
