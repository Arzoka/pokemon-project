import {
	IPokemonAbility,
	IPokemonMove,
	IPokemonSprites,
	IPokemonStat,
} from '../../PokeAPI/interfaces/Pokemon/Pokemon';
import {
	IItem,
} from '../../PokeAPI/interfaces/Items/Item.ts';

export interface IRandomPokemonEncounter {
	id: number;
	capture_rate: number;
	rarity_type: string;
	name: string;
	level: number;
	evs: {
		[key: string]: number;
	};
	ivs: {
		[key: string]: number;
	};
	caught: boolean;
	current_hp: number;
	stats: {
		hp: number;
		atk: number;
		def: number;
		spA: number;
		spD: number;
		spd: number;
	};
	ability: IPokemonAbility;
	held_item?: IItem;
	moves: IPokemonMove[];
	sprites: IPokemonSprites;
	base_stats: IPokemonStat[];
	cry: string | null;
	types: string[];
	shiny: boolean;
}
