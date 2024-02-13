import { IName } from "../../Utility/CommonModels.ts";
import { INamedApiResource } from "../../Utility/NamedApiResourceList.ts";
import { IEncounterConditionValue } from "./EncounterConditionValue.ts";

export interface IEncounterCondition {
    id: number;
    name: string;
    names: IName[];
    values: Array<INamedApiResource<IEncounterConditionValue>>;
}
