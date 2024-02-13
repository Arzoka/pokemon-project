import { IRegion } from "../Locations/Region.ts";
import { IMoveLearnMethod } from "../Moves/MoveLearnMethod.ts";
import { INamedApiResource } from "../../Utility/NamedApiResourceList.ts";
import { IGeneration } from "./Generation.ts";
import { IPokedex } from "./Pokedex.ts";
import { IVersion } from "./Version.ts";

export interface IVersionGroup {
    id: number;
    name: string;
    order: number;
    generation: INamedApiResource<IGeneration>;
    move_learn_methods: Array<INamedApiResource<IMoveLearnMethod>>;
    pokedexes: Array<INamedApiResource<IPokedex>>;
    regions: Array<INamedApiResource<IRegion>>;
    versions: Array<INamedApiResource<IVersion>>;
}
