import { IMove } from "../Moves/Move.ts";
import { IFlavorText } from "../../Utility/CommonModels.ts";
import { INamedApiResource } from "../../Utility/NamedApiResourceList.ts";

export interface ISuperContestEffect {
    id: number;
    name: string;
    flavor_text_entries: IFlavorText[];
    moves: Array<INamedApiResource<IMove>>;
}
