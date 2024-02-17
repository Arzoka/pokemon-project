import { useContext, useEffect, useState } from 'react';
import calculateEncounter from '../../utils/environment/algorithms/calculateEncounters.ts';
import { PlayerContext } from '../contexts/PlayerContext.tsx';
import { EnvironmentContext } from '../contexts/EnvironmentContext.tsx';

const useEncounter = () => {
	const { Player } = useContext(PlayerContext);
	const {
		currentEncounter,
		setCurrentEncounter,
	} = useContext(EnvironmentContext);
	const [canEncounter, setCanEncounter] = useState(true);

	useEffect(() => {
		if (!Player) {
			return;
		}

		const lastpos = [Player.lastEnvironmentTile.x, Player.lastEnvironmentTile.y].toString();
		const pos = [Player.x / 50, Player.y / 50].toString();

		if (pos !== lastpos) {
			setCanEncounter(true);
		}

		if (!Player.canEncounter || currentEncounter || !canEncounter) {
			return;
		}
		setCurrentEncounter(calculateEncounter);
		setCanEncounter(false);
	}, [Player]);
};

export default useEncounter;
