import { IRegion } from "../Locations/Region.ts";
import { IPokemonSpecies } from "../../Pokemon/PokemonSpecies.ts";
import { IDescription, IName } from "../../Utility/CommonModels.ts";
import { INamedApiResource } from "../../Utility/NamedApiResourceList.ts";
import { IVersionGroup } from "./VersionGroup.ts";

export interface IPokedex {
    id: number;
    name: string;
    is_main_series: boolean;
    descriptions: IDescription[];
    names: IName[];
    pokemon_entries: IPokemonEntry[];
    region: INamedApiResource<IRegion>;
    version_groups: Array<INamedApiResource<IVersionGroup>>;
}

export interface IPokemonEntry {
    entry_number: number;
    pokemon_species: INamedApiResource<IPokemonSpecies>;
}
