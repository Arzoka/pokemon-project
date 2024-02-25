import { createContext, Dispatch, ReactNode, SetStateAction, useContext, useState } from 'react';
import { EnvironmentContext } from './EnvironmentContext.tsx';
import Player from '../entities/Player.ts';
import { IPlayer } from '../../@types/CustomPokemonTypes/Entities/Player.ts';

interface PlayerContext {
	Player: IPlayer | null;
	setPlayer: Dispatch<SetStateAction<IPlayer | null>>;
	movePlayer: ( direction: string ) => void;
}

const PlayerContext = createContext<PlayerContext>( {
	Player: null,
	setPlayer: () => {
	},
	movePlayer: () => {
	},
} );

const PlayerContextProvider = ( { children }: {
	children: ReactNode
} ) => {
	const { environment } = useContext( EnvironmentContext );
	const [player, setPlayer] = useState<IPlayer | null>( new Player( environment ) );

	const movePlayer = ( direction: string ) => {
		if ( player ) {
			player.movePlayer( direction );
			setPlayer( new Player( environment, player ) );
		}
	};

	return (
		<PlayerContext.Provider value={ {
			Player: player,
			movePlayer,
			setPlayer,
		} }>
			{ children }
		</PlayerContext.Provider> );
};

export {
	PlayerContext, PlayerContextProvider,
};
