import { IName } from "../../Utility/CommonModels.ts";
import { INamedApiResource } from "../../Utility/NamedApiResourceList.ts";
import { IMove } from "./Move.ts";

export interface IMoveAilment {
    id: number;
    name: string;
    moves: Array<INamedApiResource<IMove>>;
    names: IName[];
}
