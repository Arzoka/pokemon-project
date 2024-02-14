interface PlayerSpriteProps {
	playerState: { x: number, y: number, direction: string };
}

const PlayerSprite = (playerSpriteProps: PlayerSpriteProps) => {
	const { playerState } = playerSpriteProps;

	return (
		<div style={ {
			position: 'absolute',
			width: '50px',
			height: '50px',
			aspectRatio: 1 / 1,
			left: playerState.x,
			top: playerState.y,
			display: 'grid',
			placeItems: 'center',
		} }>
			<img
				style={ {
					width: '90%',
					objectFit: 'contain',
					translate: '0 -20%',
				} }
				src={ `resources/characters/player/${ playerState.direction }.png` }
				alt="player sprite"
			/>
		</div>
	);
};

export default PlayerSprite;
