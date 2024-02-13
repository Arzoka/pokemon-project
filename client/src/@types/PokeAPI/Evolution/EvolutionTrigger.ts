import { IPokemonSpecies } from "../../Pokemon/PokemonSpecies.ts";
import { IName } from "../../Utility/CommonModels.ts";
import { INamedApiResource } from "../../Utility/NamedApiResourceList.ts";

export interface IEvolutionTrigger {
    id: number;
    name: string;
    names: IName[];
    pokemon_species: Array<INamedApiResource<IPokemonSpecies>>;
}
