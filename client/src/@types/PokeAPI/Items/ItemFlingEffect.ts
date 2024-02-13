import { IEffect } from "../../Utility/CommonModels.ts";
import { INamedApiResource } from "../../Utility/NamedApiResourceList.ts";
import { IItem } from "./Item.ts";

export interface IItemFlingEffect {
    id: number;
    name: string;
    effect_entries: IEffect[];
    items: Array<INamedApiResource<IItem>>;
}
