import axios from 'axios';
import { IRandomPokemonEncounter } from '../../@types/CustomPokemonTypes/Encounters/RandomEncounter';
import { IPokemon, IPokemonMove, IPokemonType } from '../../@types/PokeAPI/interfaces/Pokemon/Pokemon.ts';
import pickRandom from '../pickRandom.ts';
import pickRandomItem from './pickRandomItem.ts';
import getCaptureRate from './getCaptureRate.ts';
import calculatePokemonHP from './algorithms/calculatePokemonHP.ts';
import calculatePokemonStat from './algorithms/calculatePokemonStat.ts';
import getRarityType from './getRarityType.ts';
import { API_URL } from '../../constants/index.ts';
import generateEVs from './algorithms/generateEVs.ts';
import generateIVs from './algorithms/generateIVs.ts';

async function getRandomEncounter(setLoading: (loading: boolean) => void) {
	if (setLoading) {
		setLoading(true);
	}

	const shinyOdds = 1 / 4096;
	const isShiny = Math.random() < shinyOdds;

	// Get total Pokémon count
	const currentPokemonAmount = await axios.get(`${ API_URL }/pokemon?limit=1`)
		.then(response => {
			return response.data.count;
		})
		.catch(error => {
			return error.json();
		});

	// Get random Pokémon url
	let receivedRandomPokemon: IPokemon | null = null;

	while (!receivedRandomPokemon) {
		const randomPokemonId = Math.floor(Math.random() * currentPokemonAmount) + 1;

		try {
			const response = await axios.get(`${ API_URL }/pokemon/?offset=${ randomPokemonId - 1 }&limit=1`);
			const pokemonData = response.data;

			if (!pokemonData.results || pokemonData.results.length === 0) {
				return;
			}

			const url = pokemonData.results[0].url;

			const tempReceivedRandomPokemon = await axios.get(url)
				.then(response => {
					return response.data;
				})
				.catch(error => {
					return error.json();
				});

			if (tempReceivedRandomPokemon && tempReceivedRandomPokemon.sprites.front_default && tempReceivedRandomPokemon.sprites.front_shiny) {
				receivedRandomPokemon = tempReceivedRandomPokemon;
			}


		} catch (error) {
			console.error('Error fetching Pokémon data:', error);
		}
	}

	const level = Math.floor(Math.random() * 100) + 1;
	const EVs = generateEVs();
	const IVs = generateIVs();

	const randomPokemon: IRandomPokemonEncounter = {
		id: receivedRandomPokemon.id,
		capture_rate: await getCaptureRate(receivedRandomPokemon.species.url),
		rarity_type: await getRarityType(receivedRandomPokemon.species.url),
		name: receivedRandomPokemon.name,
		ability: pickRandom(receivedRandomPokemon.abilities, 1)[0],
		held_item: await pickRandomItem(receivedRandomPokemon.held_items, 1),
		level: level,
		evs: EVs,
		ivs: IVs,
		current_hp: calculatePokemonHP(receivedRandomPokemon, EVs, IVs, level),
		caught: false,
		stats: {
			hp: calculatePokemonHP(receivedRandomPokemon, EVs, IVs, level),
			atk: calculatePokemonStat(receivedRandomPokemon, IVs, EVs, level, 'attack'),
			def: calculatePokemonStat(receivedRandomPokemon, IVs, EVs, level, 'defense'),
			spA: calculatePokemonStat(receivedRandomPokemon, IVs, EVs, level, 'special-attack'),
			spD: calculatePokemonStat(receivedRandomPokemon, IVs, EVs, level, 'special-defense'),
			spd: calculatePokemonStat(receivedRandomPokemon, IVs, EVs, level, 'speed'),
		},

		moves: pickRandom(receivedRandomPokemon.moves, 4) as IPokemonMove[],
		sprites: receivedRandomPokemon.sprites,
		base_stats: receivedRandomPokemon.stats,
		types: receivedRandomPokemon.types.map((type: IPokemonType) => type.type.name),
		cry: receivedRandomPokemon.cries.legacy ?? receivedRandomPokemon.cries.latest ?? null,
		shiny: isShiny,
	};

	if (setLoading) {
		setLoading(false);
	}

	console.log(randomPokemon);
	return randomPokemon;
}

export default getRandomEncounter;
