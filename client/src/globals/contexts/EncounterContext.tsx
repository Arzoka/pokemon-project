import { IRandomPokemonEncounter } from '../../@types/CustomPokemonTypes/Encounters/RandomEncounter.ts';
import React, { createContext, useState } from 'react';

type EncounterContextType = {
	Encounter: IRandomPokemonEncounter | null;
	setEncounter: (encounter: IRandomPokemonEncounter) => void;
	attemptingCatch: boolean;
	setAttemptingCatch: (attemptingCatch: boolean) => void;
}

const EncounterContext = createContext<EncounterContextType>({
	Encounter: null,
	setEncounter: () => {
	},
	attemptingCatch: false,
	setAttemptingCatch: () => {
	},
});

const EncounterContextProvider = ({ children }: {
	children: React.ReactNode
}) => {
	const [Encounter, setEncounter] = useState<IRandomPokemonEncounter | null>(null);
	const [attemptingCatch, setAttemptingCatch] = useState(false);

	return (
		<EncounterContext.Provider value={ {
			Encounter,
			setEncounter,
			attemptingCatch,
			setAttemptingCatch,
		} }>
			{ children }
		</EncounterContext.Provider>
	);
};

export { EncounterContext, EncounterContextProvider };
