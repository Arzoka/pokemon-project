import { IName } from "../../Utility/CommonModels.ts";

export interface IEncounterMethod {
    id: number;
    name: string;
    order: number;
    names: IName[];
}
