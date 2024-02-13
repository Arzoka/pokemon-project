import { IContestType } from "../Contests/ContestType.ts";
import { IName } from "../../Utility/CommonModels.ts";
import { INamedApiResource } from "../../Utility/NamedApiResourceList.ts";
import { IBerry } from "./Berry.ts";

export interface IBerryFlavor {
    id: number;
    name: string;
    berries: IFlavorBerryMap[];
    contest_type: INamedApiResource<IContestType>;
    names: IName[];
}

export interface IFlavorBerryMap {
    potency: number;
    berry: INamedApiResource<IBerry>;
}
