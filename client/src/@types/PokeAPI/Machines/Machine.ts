import { IVersionGroup } from "../Games/VersionGroup.ts";
import { IItem } from "../Items/Item.ts";
import { IMove } from "../Moves/Move.ts";
import { INamedApiResource } from "../../Utility/NamedApiResourceList.ts";

export interface IMachine {
    id: number;
    item: INamedApiResource<IItem>;
    move: INamedApiResource<IMove>;
    version_group: INamedApiResource<IVersionGroup>;
}
