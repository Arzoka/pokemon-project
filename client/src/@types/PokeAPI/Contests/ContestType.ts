import { IBerryFlavor } from "../Berries/BerryFlavor.ts";
import { ILanguage } from "../../Utility/Language.ts";
import { INamedApiResource } from "../../Utility/NamedApiResourceList.ts";

export interface IContestType {
    id: number;
    name: string;
    berry_flavor: INamedApiResource<IBerryFlavor>;
    names: IContestName[];
}

export interface IContestName {
    name: string;
    color: string;
    language: INamedApiResource<ILanguage>;
}
