import { useContext, useEffect, useRef } from 'react';
import { EnvironmentContext } from '../contexts/EnvironmentContext.tsx';
import { PlayerContext } from '../contexts/PlayerContext.tsx';

const useGameLoop = () => {
	const {
		Player,
		movePlayer,
	} = useContext(PlayerContext);
	const { currentEncounter } = useContext(EnvironmentContext);
	const activeLoop = useRef<any>();
	const keyState = useRef<{
		[key: string]: boolean
	}>({
		'arrow-left': false,
		'arrow-right': false,
		'arrow-up': false,
		'arrow-down': false,
		'a': false,
		'd': false,
		'w': false,
		's': false,
		'shift': false,
	});

	useEffect(() => {
		console.log('game loop useEffect triggered');

		const handleKeyDown = (e: KeyboardEvent) => {
			// Without this we get cursed diagonal moving lol
			for (const key in keyState.current) {
				keyState.current[key] = false;
			}

			keyState.current[e.key.toLowerCase()] = true;
		};

		const handleKeyUp = (e: KeyboardEvent) => {
			keyState.current[e.key.toLowerCase()] = false;
		};

		window.addEventListener('keydown', handleKeyDown, true);
		window.addEventListener('keyup', handleKeyUp, true);

		return () => {
			window.removeEventListener('keydown', handleKeyDown, true);
			window.removeEventListener('keyup', handleKeyUp, true);
		};
	}, []);

	useEffect(() => {
		const gameLoop = () => {
			if (!Player) {
				return;
			}

			if (keyState.current['arrow-left'] || keyState.current['a']) {
				movePlayer('left');
			}
			if (keyState.current['arrow-right'] || keyState.current['d']) {
				movePlayer('right');
			}
			if (keyState.current['arrow-up'] || keyState.current['w']) {
				movePlayer('up');
			}
			if (keyState.current['arrow-down'] || keyState.current['s']) {
				movePlayer('down');
			}

			// Update Player state after each movement
			activeLoop.current = setTimeout(gameLoop, Player.isRunning ? 100 : 200);
		};

		if (currentEncounter) {
			clearTimeout(activeLoop.current);
		} else {
			if (!Player) {
				return;
			}
			activeLoop.current = setTimeout(gameLoop, Player.isRunning ? 100 : 200);
		}

		return () => clearTimeout(activeLoop.current);
	}, [Player, currentEncounter, movePlayer]);

};

export default useGameLoop;
