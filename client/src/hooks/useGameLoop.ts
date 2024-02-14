import { useEffect } from 'react';

interface Player {
	x: number;
	y: number;
	direction: string;
	canEncounter: boolean;
	isRunning: boolean;
	movePlayer: (direction: string) => void;
}

interface setPlayerState {
	(x: {
		x: number;
		y: number;
		direction: string;
		canEncounter: boolean;
	}): void;
}

const useGameLoop = (player: Player, setPlayerState: setPlayerState) => {
	useEffect(() => {
		const keyState: { [key: string]: boolean } = {};
		window.addEventListener('keydown', function (e) {
			keyState[e.key.toLowerCase()] = true;
		}, true);
		window.addEventListener('keyup', function (e) {
			keyState[e.key.toLowerCase()] = false;
		}, true);

		function gameLoop() {
			if (keyState['arrow-left'] || keyState['a']) {
				player.movePlayer('left');
			}
			if (keyState['arrow-right'] || keyState['d']) {
				player.movePlayer('right');
			}
			if (keyState['arrow-up'] || keyState['w']) {
				player.movePlayer('up');
			}
			if (keyState['arrow-left'] || keyState['s']) {
				player.movePlayer('down');
			}
			player.isRunning = keyState['shift'];


			setPlayerState({
				x: player.x,
				y: player.y,
				direction: player.direction,
				canEncounter: player.canEncounter,
			});

			setTimeout(gameLoop, player.isRunning ? 100 : 200);
		}

		gameLoop();

		return () => {
			window.removeEventListener('keydown', function (e) {
				keyState[e.key.toLowerCase()] = true;
			}, true);
			window.removeEventListener('keyup', function (e) {
				keyState[e.key.toLowerCase()] = false;
			}, true);
		};
	}, []);
};

export default useGameLoop;
