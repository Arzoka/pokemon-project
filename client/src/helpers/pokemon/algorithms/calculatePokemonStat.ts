import { IIVs } from '../../../@types/CustomPokemonTypes/stats/IVs.ts';
import { IEVs } from '../../../@types/CustomPokemonTypes/stats/EVs.ts';
import { IPokemon } from '../../../@types/PokeAPI/Pokemon/Pokemon.ts';

function calculatePokemonStat(
  pokemon: IPokemon,
  IVs: IIVs,
  EVs: IEVs,
  level: number,
  stat: string,
  natureMod?: number,
) {
  const baseStat = pokemon.stats.find(pokemonStat => pokemonStat.stat.name === stat)?.base_stat;
  if (!baseStat) {
    console.error('no basestat found with name', stat, 'in', pokemon.stats);
    return 1;
  }

  const IV: number = IVs[stat as keyof IIVs] || 0;
  const EV: number = EVs[stat as keyof IEVs] || 0;

  const natureModifier = natureMod || 1;

  return Math.floor(((2 * baseStat + IV + Math.floor(0.25 * EV)) * level / 100 + 5) * natureModifier);
}

export default calculatePokemonStat;
