import { IDescription, IName } from "../../Utility/CommonModels.ts";
import { INamedApiResource } from "../../Utility/NamedApiResourceList.ts";
import { IItem } from "./Item.ts";

export interface IItemAttribute {
    id: number;
    name: string;
    items: Array<INamedApiResource<IItem>>;
    names: IName[];
    descriptions: IDescription[];
}
