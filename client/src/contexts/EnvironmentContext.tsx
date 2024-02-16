import getRandomEnvironment from '../helpers/environment/getRandomEnvironment.ts';
import { createContext, ReactNode, useState } from 'react';
import { EnvironmentTile } from '../@types/CustomPokemonTypes/Environment/tile.ts';

type EncounterChecker = () => boolean;

interface EnvironmentContextType {
	currentEncounter: boolean;
	setCurrentEncounter: (currentEncounter: EncounterChecker | boolean) => void;
	environment: EnvironmentTile[][];
	setEnvironment: (environment: EnvironmentTile[][]) => void;

}

const EnvironmentContext = createContext<EnvironmentContextType>({
	currentEncounter: false,
	setCurrentEncounter: () => {
	},
	environment: getRandomEnvironment(),
	setEnvironment: () => {
	},
});

const EnvironmentContextProvider = ({ children }: {
	children: ReactNode
}) => {
	const [currentEncounter, setCurrentEncounter] = useState<boolean>(false);
	const [environment, setEnvironment] = useState<EnvironmentTile[][]>(getRandomEnvironment());

	return (
		<EnvironmentContext.Provider value={ {
			currentEncounter,
			setCurrentEncounter,
			environment,
			setEnvironment,
		} }>
			{ children }
		</EnvironmentContext.Provider>
	);
};

export {
	EnvironmentContext, EnvironmentContextProvider,
};
