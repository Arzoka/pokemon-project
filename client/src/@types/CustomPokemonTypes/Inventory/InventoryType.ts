import { IRandomPokemonEncounter } from '../Encounters/RandomEncounter.ts';
import { IItem } from '../../PokeAPI/interfaces/Items/Item.ts';

export type InventoryType = {
	pokemon?: IRandomPokemonEncounter[];
	items?: IItem | never[];
}
