import axios from 'axios';
import { API_URL } from '../../globals/constants';
import { IItem } from '../../@types/PokeAPI/interfaces/Items/Item.ts';
import { INamedApiResource } from '../../@types/PokeAPI/interfaces/Utility/NamedApiResourceList.ts';
import getCatchRateMultiplier from './getCatchRateMultiplier.ts';
import { IReceivedPokeball } from '../../@types/CustomPokemonTypes/Pokeballs/IPokeball.ts';

async function getPokeballs() {
	try {
		const response = await axios.get(`${ API_URL }/item-category/34/`);
		const items: INamedApiResource<IItem>[] = response.data.items;
		const pokeballs: IReceivedPokeball[] = [];

		await Promise.all(items.map(async (pokeball_item: INamedApiResource<IItem>) => {
			const response = await axios.get(pokeball_item.url);
			pokeballs.push({
				name: response.data.name.replace(/-/g, ' '),
				catch_rate_multiplier: getCatchRateMultiplier(response.data.name),
				cost: response.data.cost,
				sprite: response.data.sprites.default,
				description: response.data.effect_entries[0].effect,
			});
		}));

		return pokeballs;
	} catch (error) {
		console.error('Error fetching pokeballs:', error);
		return [];
	}
}

export default getPokeballs;
