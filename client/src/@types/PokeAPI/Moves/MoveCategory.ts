import { IDescription } from "../../Utility/CommonModels.ts";
import { INamedApiResource } from "../../Utility/NamedApiResourceList.ts";
import { IMove } from "./Move.ts";

export interface IMoveCategory {
    id: number;
    name: string;
    moves: Array<INamedApiResource<IMove>>;
    descriptions: IDescription[];
}
