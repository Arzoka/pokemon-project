import { IPokemonSpecies } from "../../Pokemon/PokemonSpecies.ts";
import { IName } from "../../Utility/CommonModels.ts";
import { INamedApiResource } from "../../Utility/NamedApiResourceList.ts";

export interface IPalParkArea {
    id: number;
    name: string;
    names: IName[];
    pokemon_encounters: IPalParkEncounterSpecies[];
}

export interface IPalParkEncounterSpecies {
    base_socre: number;
    rate: number;
    pokemon_species: INamedApiResource<IPokemonSpecies>;
}
