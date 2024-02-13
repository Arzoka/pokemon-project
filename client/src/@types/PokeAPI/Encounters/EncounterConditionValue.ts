import { IName } from "../../Utility/CommonModels.ts";
import { INamedApiResource } from "../../Utility/NamedApiResourceList.ts";
import { IEncounterCondition } from "./EncounterCondition.ts";

export interface IEncounterConditionValue {
    id: number;
    name: string;
    condition: Array<INamedApiResource<IEncounterCondition>>;
    names: IName[];
}
