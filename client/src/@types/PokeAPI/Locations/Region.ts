import { IGeneration } from "../Games/Generation.ts";
import { IPokedex } from "../Games/Pokedex.ts";
import { IVersionGroup } from "../Games/VersionGroup.ts";
import { IName } from "../../Utility/CommonModels.ts";
import { INamedApiResource } from "../../Utility/NamedApiResourceList.ts";
import { ILocation } from "./Location.ts";

export interface IRegion {
    id: number;
    locations: Array<INamedApiResource<ILocation>>;
    name: string;
    names: IName[];
    main_generation: INamedApiResource<IGeneration>;
    pokedexes: Array<INamedApiResource<IPokedex>>;
    version_groups: Array<INamedApiResource<IVersionGroup>>;
}
