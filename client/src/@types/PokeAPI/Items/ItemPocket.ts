import { INamedApiResource } from "../../Utility/NamedApiResourceList.ts";
import { IItemCategory } from "./ItemCategory.ts";

export interface IItemPocket {
    id: number;
    name: string;
    categories: Array<INamedApiResource<IItemCategory>>;
}
