import { IEncounterMethod } from "../Encounters/EncounterMethod.ts";
import { IVersion } from "../Games/Version.ts";
import { IPokemon } from "../../Pokemon/Pokemon.ts";
import { IName, IVersionEncounterDetail } from "../../Utility/CommonModels.ts";
import { INamedApiResource } from "../../Utility/NamedApiResourceList.ts";
import { ILocation } from "./Location.ts";

export interface ILocationArea {
    id: number;
    name: string;
    game_index: number;
    encounter_method_rates: IEncounterMethodRate[];
    location: INamedApiResource<ILocation>;
    names: IName[];
    pokemon_encounters: IPokemonEncounter[];
}

export interface IEncounterMethodRate {
    encounter_method: INamedApiResource<IEncounterMethod>;
    version_details: IEncounterVersionDetails[];
}

export interface IEncounterVersionDetails {
    rate: number;
    version_details: INamedApiResource<IVersion>;
}

export interface IPokemonEncounter {
    pokemon: INamedApiResource<IPokemon>;
    version_details: IVersionEncounterDetail[];
}
