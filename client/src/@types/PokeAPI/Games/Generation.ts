import { IRegion } from "../Locations/Region.ts";
import { IMove } from "../Moves/Move.ts";
import { IAbility } from "../../Pokemon/Ability.ts";
import { IPokemonSpecies } from "../../Pokemon/PokemonSpecies.ts";
import { IType } from "../../Pokemon/Type.ts";
import { IName } from "../../Utility/CommonModels.ts";
import { INamedApiResource } from "../../Utility/NamedApiResourceList.ts";
import { IVersionGroup } from "./VersionGroup.ts";

export interface IGeneration {
    id: number;
    name: string;
    abilities: Array<INamedApiResource<IAbility>>;
    names: IName[];
    main_region: INamedApiResource<IRegion>;
    moves: Array<INamedApiResource<IMove>>;
    pokemon_species: Array<INamedApiResource<IPokemonSpecies>>;
    types: Array<INamedApiResource<IType>>;
    version_groups: Array<INamedApiResource<IVersionGroup>>;
}
