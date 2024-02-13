import { IName } from "../../Utility/CommonModels.ts";
import { INamedApiResource } from "../../Utility/NamedApiResourceList.ts";
import { IItem } from "./Item.ts";
import { IItemPocket } from "./ItemPocket.ts";

export interface IItemCategory {
    id: number;
    name: string;
    items: Array<INamedApiResource<IItem>>;
    names: IName[];
    pocket: INamedApiResource<IItemPocket>;
}
