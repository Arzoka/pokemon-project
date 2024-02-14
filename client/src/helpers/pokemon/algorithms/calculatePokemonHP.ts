import { IPokemon } from '../../../@types/PokeAPI/interfaces/Pokemon/Pokemon.ts';
import { IEVs } from '../../../@types/CustomPokemonTypes/stats/EVs.ts';
import { IIVs } from '../../../@types/CustomPokemonTypes/stats/IVs.ts';

function calculatePokemonHP(pokemon: IPokemon, EVs: IEVs, IVs: IIVs, lvl: number) {

	const hp_base_stat = pokemon.stats.find(stat => stat.stat.name === 'hp')?.base_stat;
	if (!hp_base_stat) {
		return 1;
	}

	return Math.floor(0.01 * (2 * hp_base_stat + IVs.hp + Math.floor(0.25 * EVs.hp)) * lvl) + lvl + 10;
}

export default calculatePokemonHP;
