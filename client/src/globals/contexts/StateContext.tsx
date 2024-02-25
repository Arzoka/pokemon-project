import { createContext, ReactNode, useState } from 'react';

type StateContextType = {
	state: string;
	setState: ( state: string ) => void;
}

const StateContext = createContext<StateContextType>( {
	state: '',
	setState: () => {},
} );

const StateWrapper = ( { children }: {
	children: ReactNode
} ) => {
	const [state, setState] = useState( 'onboarding' );

	return (
		<StateContext.Provider value={ {
			state,
			setState,
		} }>
			{ children }
		</StateContext.Provider> );
};

export { StateContext, StateWrapper };

