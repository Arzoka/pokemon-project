import getRandomEnvironment from '../../utils/environment/getRandomEnvironment.ts';
import { createContext, ReactNode, useEffect, useRef, useState } from 'react';
import { EnvironmentTile } from '../../@types/CustomPokemonTypes/Environment/tile.ts';

type EncounterChecker = () => boolean;

interface EnvironmentContextType {
	currentEncounter: boolean;
	setCurrentEncounter: ( currentEncounter: EncounterChecker | boolean ) => void;
	environment: EnvironmentTile[][];
	setEnvironment: ( environment: EnvironmentTile[][] ) => void;
	music: string;
	setMusic: ( music: string ) => void;

}

const EnvironmentContext = createContext<EnvironmentContextType>( {
	currentEncounter: false,
	setCurrentEncounter: () => {
	},
	environment: getRandomEnvironment(),
	setEnvironment: () => {
	},
	music: '',
	setMusic: () => {
	},
} );

const EnvironmentContextProvider = ( { children }: {
	children: ReactNode
} ) => {
	const [currentEncounter, setCurrentEncounter] = useState<boolean>( false );
	const [environment, setEnvironment] = useState<EnvironmentTile[][]>( getRandomEnvironment() );
	const [music, setMusic] = useState<string>( 'Route1Music' );
	const playingAudio = useRef<HTMLAudioElement>();

	useEffect( () => {
		if ( playingAudio.current ) {
			playingAudio.current?.remove();
		}
		const audio = new Audio( `resources/sound/music/${ music }.mp3` );
		audio.volume = 0.3;
		playingAudio.current = audio;
		if ( !music ) {
			return;
		}

		audio.loop = true;
		audio.play().catch( ( error ) => {
			console.error( error );
		} );

		return () => {
			audio.pause();
		};
	}, [music] );
	return (
		<EnvironmentContext.Provider value={ {
			currentEncounter,
			setCurrentEncounter,
			environment,
			setEnvironment,
			music,
			setMusic,
		} }>
			{ children }
		</EnvironmentContext.Provider> );
};

export {
	EnvironmentContext, EnvironmentContextProvider,
};
