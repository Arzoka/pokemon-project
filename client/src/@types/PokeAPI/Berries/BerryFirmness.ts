import { IName } from "../../Utility/CommonModels.ts";
import { INamedApiResource } from "../../Utility/NamedApiResourceList.ts";
import { IBerry } from "./Berry.ts";

export interface IBerryFirmness {
    id: number;
    name: string;
    berries: Array<INamedApiResource<IBerry>>;
    names: IName[];
}
