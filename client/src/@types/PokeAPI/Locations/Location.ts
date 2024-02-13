import { IGenerationGameIndex, IName } from "../../Utility/CommonModels.ts";
import { INamedApiResource } from "../../Utility/NamedApiResourceList.ts";
import { ILocationArea } from "./LocationArea.ts";
import { IRegion } from "./Region.ts";

export interface ILocation {
    id: number;
    name: string;
    region: INamedApiResource<IRegion>;
    names: IName[];
    game_indices: IGenerationGameIndex[];
    areas: Array<INamedApiResource<ILocationArea>>;
}
