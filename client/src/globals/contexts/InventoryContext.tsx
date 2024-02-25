import { createContext, Dispatch, ReactNode, SetStateAction, useState } from 'react';
import pokemonInventory from '../../utils/inventory/pokemon.ts';
import { InventoryType } from '../../@types/CustomPokemonTypes/Inventory/InventoryType.ts';
import { IRandomPokemonEncounter } from '../../@types/CustomPokemonTypes/Encounters/RandomEncounter.ts';


type InventoryContextType = {
	inventory: InventoryType;
	setInventory: Dispatch<SetStateAction<InventoryType>>;
	viewingPokemon: IRandomPokemonEncounter | null;
	setViewingPokemon: Dispatch<SetStateAction<IRandomPokemonEncounter | null>>;
}

const InventoryContext = createContext<InventoryContextType>( {
	inventory: {},
	setInventory: () => {},
	viewingPokemon: null,
	setViewingPokemon: () => {},

} );

const InventoryWrapper = ( { children }: {
	children: ReactNode
} ) => {
	const [inventory, setInventory] = useState<InventoryType>( {
		pokemon: pokemonInventory.getPokemon(),
		items: [],
	} );
	const [viewingPokemon, setViewingPokemon] = useState<IRandomPokemonEncounter | null>( null );


	return (
		<InventoryContext.Provider value={ {
			inventory,
			setInventory,
			viewingPokemon,
			setViewingPokemon,
		} }>
			{ children }
		</InventoryContext.Provider> );
};

export { InventoryWrapper, InventoryContext };
