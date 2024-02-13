import { IDescription, IName } from "../../Utility/CommonModels.ts";
import { INamedApiResource } from "../../Utility/NamedApiResourceList.ts";
import { IMove } from "./Move.ts";

export interface IMoveDamageClass {
    id: number;
    name: string;
    descriptions: IDescription[];
    moves: Array<INamedApiResource<IMove>>;
    names: IName[];
}
